/**
 * Analytics utilities for privacy-friendly tracking
 * 
 * We use Vercel Analytics by default (already integrated in layout.tsx)
 * This file provides additional utilities for PostHog or other analytics
 */

// PostHog configuration (optional)
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

/**
 * Track custom event (privacy-friendly)
 * Only tracks if user has consented to analytics cookies
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Check if user has consented to analytics
  const consent = getCookieConsent();
  if (!consent.analytics) {
    console.log('Analytics not consented, skipping event:', eventName);
    return;
  }

  // Send to PostHog if configured
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(eventName, properties);
  }

  // Send to Vercel Analytics (automatically respects consent)
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', eventName, properties);
  }
}

/**
 * Track page view
 */
export function trackPageView(url: string) {
  trackEvent('pageview', { url });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent('form_submission', {
    form_name: formName,
    success,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, ctaLocation: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
}

/**
 * Get cookie consent status
 */
function getCookieConsent(): {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
} {
  if (typeof window === 'undefined') {
    return { necessary: true, analytics: false, preferences: false };
  }

  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    return { necessary: true, analytics: false, preferences: false };
  }

  try {
    return JSON.parse(consent);
  } catch {
    return { necessary: true, analytics: false, preferences: false };
  }
}

/**
 * Set cookie consent
 */
export function setCookieConsent(consent: {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
}) {
  if (typeof window === 'undefined') return;

  localStorage.setItem('cookie-consent', JSON.stringify(consent));

  // Dispatch custom event for same-tab updates
  window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: consent }));

  // Initialize PostHog if analytics is consented
  if (consent.analytics && POSTHOG_KEY && !window.posthog) {
    initPostHog();
  }

  // Disable PostHog if analytics is not consented
  if (!consent.analytics && window.posthog) {
    window.posthog.opt_out_capturing();
  }

  // Log consent status
  if (consent.analytics) {
    console.log('✅ Analytics consent granted');
  } else {
    console.log('⛔️ Analytics consent denied');
  }
}

/**
 * Initialize PostHog (only called after consent)
 * Note: Requires 'posthog-js' package - install with: npm install posthog-js
 */
function initPostHog() {
  // PostHog is optional - comment out if not using
  if (typeof window === 'undefined' || !POSTHOG_KEY) return;
  
  console.log('PostHog not configured or posthog-js not installed');
  // Uncomment below when posthog-js is installed:
  /*
  import('posthog-js')
    .then((posthog) => {
      posthog.default.init(POSTHOG_KEY!, {
        api_host: POSTHOG_HOST,
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') {
            ph.opt_out_capturing();
          }
        },
        respect_dnt: true,
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        mask_all_text: true,
        mask_all_element_attributes: true,
        advanced_disable_decide: true,
      });
      window.posthog = posthog.default;
    })
    .catch(() => {
      console.log('PostHog initialization failed');
    });
  */
}

// TypeScript declarations for window
declare global {
  interface Window {
    posthog?: any;
    va?: (event: string, data?: any) => void;
  }
}

