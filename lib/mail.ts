import { Resend } from 'resend';
import type { ContactFormData, PartnerInquiryData } from './validators';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender and recipient
const FROM_EMAIL = process.env.FROM_EMAIL || 'nader.bakri@cybergl.com';
const TO_EMAIL = process.env.TO_EMAIL || 'nader.bakri@cybergl.com';
const ARCHIVE_EMAIL = process.env.ARCHIVE_EMAIL; // Optional archive mailbox

/**
 * Send contact form submission email
 */
export async function sendContactEmail(data: ContactFormData) {
  const topicLabels: Record<ContactFormData['topic'], string> = {
    incident: '🚨 Incident Response',
    compliance: '✓ Compliance',
    contracts: '📄 Contracts',
    disputes: '⚖️ Disputes',
    forensics: '🔍 Forensics',
    readiness: '🛡️ Readiness Assessment',
    partnership: '🤝 Partnership',
    other: '💬 General Inquiry',
  };

  const subject = `${topicLabels[data.topic]}: ${data.name} - ${data.company || 'Contact Form'}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 16px; }
        .label { font-weight: 600; color: #4F46E5; margin-bottom: 4px; }
        .value { background: white; padding: 8px 12px; border-radius: 4px; border: 1px solid #e2e8f0; }
        .message-box { background: white; padding: 16px; border-radius: 4px; border-left: 4px solid #4F46E5; white-space: pre-wrap; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e2e8f0; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0;">New Contact Form Submission</h2>
        <p style="margin: 8px 0 0 0; opacity: 0.9;">${topicLabels[data.topic]}</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${data.name}</div>
        </div>
        
        ${data.role ? `
        <div class="field">
          <div class="label">Role:</div>
          <div class="value">${data.role}</div>
        </div>
        ` : ''}
        
        ${data.company ? `
        <div class="field">
          <div class="label">Company:</div>
          <div class="value">${data.company}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        
        ${data.phone ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        ` : ''}
        
        ${data.jurisdiction ? `
        <div class="field">
          <div class="label">Jurisdiction:</div>
          <div class="value">${data.jurisdiction}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="label">Message:</div>
          <div class="message-box">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Bucharest', dateStyle: 'full', timeStyle: 'long' })}</p>
          <p>Priority: ${data.topic === 'incident' ? '🔴 HIGH - Incident Response' : '🟢 Normal'}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission
${topicLabels[data.topic]}

Name: ${data.name}
${data.role ? `Role: ${data.role}\n` : ''}${data.company ? `Company: ${data.company}\n` : ''}Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ''}${data.jurisdiction ? `Jurisdiction: ${data.jurisdiction}\n` : ''}
Message:
${data.message}

---
Submitted: ${new Date().toISOString()}
Priority: ${data.topic === 'incident' ? 'HIGH - Incident Response' : 'Normal'}
  `.trim();

  try {
    // Send primary email
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      text,
      replyTo: data.email,
    });

    // Send archive copy (optional)
    if (ARCHIVE_EMAIL) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ARCHIVE_EMAIL,
        subject: `[ARCHIVE] ${subject}`,
        html,
        text,
      });
    }

    return { success: true, id: response.data?.id };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send partner inquiry email
 */
export async function sendPartnerInquiryEmail(data: PartnerInquiryData) {
  const partnerTypeLabels: Record<PartnerInquiryData['partnerType'], string> = {
    mssp: 'MSSP',
    forensics: 'Forensics Firm',
    insurance: 'Insurance Carrier/Broker',
    other: 'Other',
  };

  const subject = `🤝 Partner Inquiry: ${data.organizationName} (${partnerTypeLabels[data.partnerType]})`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669 0%, #10B981 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 16px; }
        .label { font-weight: 600; color: #059669; margin-bottom: 4px; }
        .value { background: white; padding: 8px 12px; border-radius: 4px; border: 1px solid #e2e8f0; }
        .text-box { background: white; padding: 16px; border-radius: 4px; border-left: 4px solid #059669; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0;">New Partner Inquiry</h2>
        <p style="margin: 8px 0 0 0; opacity: 0.9;">${partnerTypeLabels[data.partnerType]}</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Organization:</div>
          <div class="value">${data.organizationName}</div>
        </div>
        
        <div class="field">
          <div class="label">Contact Name:</div>
          <div class="value">${data.contactName}</div>
        </div>
        
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        
        ${data.phone ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        ` : ''}
        
        ${data.website ? `
        <div class="field">
          <div class="label">Website:</div>
          <div class="value"><a href="${data.website}" target="_blank">${data.website}</a></div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="label">Partner Type:</div>
          <div class="value">${partnerTypeLabels[data.partnerType]}</div>
        </div>
        
        <div class="field">
          <div class="label">Regions:</div>
          <div class="text-box">${data.regions}</div>
        </div>
        
        <div class="field">
          <div class="label">Capabilities:</div>
          <div class="text-box">${data.capabilities}</div>
        </div>
        
        ${data.message ? `
        <div class="field">
          <div class="label">Additional Message:</div>
          <div class="text-box">${data.message}</div>
        </div>
        ` : ''}
      </div>
    </body>
    </html>
  `;

  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: data.email,
    });

    return { success: true, id: response.data?.id };
  } catch (error) {
    console.error('Failed to send partner inquiry email:', error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send confirmation email to user
 */
export async function sendConfirmationEmail(
  to: string,
  name: string,
  topic: ContactFormData['topic']
) {
  const subject = 'Thank you for contacting CyberGlobal Law';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%); color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: white; padding: 30px 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
        .hotline { background: #FEF3C7; border: 2px solid #F59E0B; padding: 16px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .hotline-number { font-size: 24px; font-weight: bold; color: #D97706; margin: 8px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; font-size: 14px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0; font-size: 24px;">CyberGlobal Law</h1>
      </div>
      <div class="content">
        <p>Dear ${name},</p>
        
        <p>Thank you for contacting CyberGlobal Law. We have received your inquiry and will respond within <strong>1 business day</strong>.</p>
        
        ${topic === 'incident' ? `
        <div class="hotline">
          <p style="margin: 0; font-weight: 600; color: #D97706;">⚠️ CYBER INCIDENT IN PROGRESS?</p>
          <p style="margin: 8px 0 4px 0;">Call our 24/7 Incident Hotline for immediate assistance:</p>
          <div class="hotline-number">+40 745 304 772</div>
          <p style="margin: 4px 0 0 0; font-size: 14px;">Response within 30 minutes, 24/7/365</p>
        </div>
        ` : ''}
        
        <p>In the meantime, you may find these resources helpful:</p>
        <ul>
          <li><a href="https://cybergloballaw.com/services">Our Services</a></li>
          <li><a href="https://cybergloballaw.com/cybersecurity">EU Cyber Regulations Overview</a></li>
          <li><a href="https://cybergloballaw.com/about">About CyberGlobal Law</a></li>
        </ul>
        
        <div class="footer">
          <p><strong>CyberGlobal Law</strong><br>
          Email: <a href="mailto:nader.bakri@cybergl.com">nader.bakri@cybergl.com</a><br>
          Phone: +40 745 304 772<br>
          24/7 Hotline: +40 745 304 772</p>
          
          <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
            This is an automated confirmation. Please do not reply to this email. 
            We will respond to your inquiry from a personal email address.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Don't throw - confirmation email is optional
    return { success: false };
  }
}

