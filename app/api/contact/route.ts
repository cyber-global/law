import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/mail';
import { sendSlackNotification } from '@/lib/slack';
import { checkRateLimit } from '@/lib/rate-limit';
import UAParser from 'ua-parser-js';

/**
 * POST /api/contact
 * Handle contact form submissions with:
 * - Zod validation
 * - Rate limiting
 * - Turnstile verification
 * - IP + User Agent capture
 * - Resend email
 * - Slack webhook notification
 */
export async function POST(request: Request) {
  try {
    // Capture IP and User Agent for logging and rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || '';
    const ua = new UAParser(userAgent);

    // Parse request body
    const body = await request.json();

    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form and try again.',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Rate limiting - 5 submissions per hour per IP
    const rateLimitCheck = checkRateLimit(ip, 5, 60 * 60 * 1000);
    if (!rateLimitCheck.success) {
      const resetTime = new Date(rateLimitCheck.reset);
      const minutesUntilReset = Math.ceil((rateLimitCheck.reset - Date.now()) / 60000);
      
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Please try again in ${minutesUntilReset} minutes.`,
          retryAfter: resetTime.toISOString(),
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitCheck.reset - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(rateLimitCheck.limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.floor(rateLimitCheck.reset / 1000)),
          },
        }
      );
    }

    // Verify Cloudflare Turnstile token (if configured)
    if (data.turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
      try {
        const turnstileResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secret: process.env.TURNSTILE_SECRET_KEY,
              response: data.turnstileToken,
              remoteip: ip,
            }),
          }
        );

        const turnstileResult = await turnstileResponse.json();
        
        if (!turnstileResult.success) {
          console.warn('Turnstile verification failed:', turnstileResult['error-codes']);
          return NextResponse.json(
            {
              success: false,
              message: 'Spam verification failed. Please try again or contact us directly at nader.bakri@cybergl.com',
            },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error('Turnstile verification error:', error);
        // Don't block submission if Turnstile service is down
        console.warn('Turnstile service unavailable, allowing submission');
      }
    }

    // Log submission with IP and User Agent (for monitoring and security)
    console.log('📧 Contact form submission:', {
      topic: data.topic,
      email: data.email,
      company: data.company || 'N/A',
      timestamp: new Date().toISOString(),
      ip: ip,
      userAgent: {
        browser: ua.getBrowser().name,
        os: ua.getOS().name,
        device: ua.getDevice().type || 'desktop',
      },
      rateLimitRemaining: rateLimitCheck.remaining,
    });

    // Send notification email to team via Resend
    try {
      const emailResult = await sendContactEmail(data);
      console.log('✅ Email sent successfully:', emailResult.id);
    } catch (error) {
      console.error('❌ Failed to send notification email:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'We couldn\'t send your message. Please email us directly at nader.bakri@cybergl.com or call our 24/7 hotline.',
          error: 'email_failed',
        },
        { status: 500 }
      );
    }

    // Send confirmation email to user (non-blocking - don't fail if this errors)
    sendConfirmationEmail(data.email, data.name, data.topic)
      .then(() => {
        console.log('✅ Confirmation email sent to:', data.email);
      })
      .catch((error) => {
        console.error('⚠️ Failed to send confirmation email (non-critical):', error);
      });

    // Send Slack webhook notification (optional, non-blocking)
    if (process.env.SLACK_WEBHOOK_URL) {
      sendSlackNotification(data)
        .then((result) => {
          if (result.success) {
            console.log('✅ Slack notification sent');
          } else {
            console.warn('⚠️ Slack notification failed (non-critical)');
          }
        })
        .catch((error) => {
          console.error('⚠️ Slack webhook error (non-critical):', error);
        });
    }

    // Success response with friendly message
    const responseMessage = data.topic === 'incident'
      ? 'Thank you for contacting us. For urgent incidents, please also call our 24/7 hotline at +40 745 304 772 for immediate assistance.'
      : 'Thank you for your message! We will respond within 1 business day. Check your email for confirmation.';

    return NextResponse.json(
      {
        success: true,
        message: responseMessage,
      },
      {
        headers: {
          'X-RateLimit-Limit': String(rateLimitCheck.limit),
          'X-RateLimit-Remaining': String(rateLimitCheck.remaining),
          'X-RateLimit-Reset': String(Math.floor(rateLimitCheck.reset / 1000)),
        },
      }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Friendly error message
    const errorMessage = error instanceof Error 
      ? 'Something went wrong processing your request. Please try again or contact us directly.'
      : 'An unexpected error occurred. Please email nader.bakri@cybergl.com or call +40 745 304 772.';
    
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: 'internal_error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Return method not allowed
 */
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. Use POST to submit the contact form.',
    },
    { status: 405 }
  );
}

