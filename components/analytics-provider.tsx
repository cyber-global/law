'use client';

import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

/**
 * Analytics provider that respects cookie consent
 * Only loads Vercel Analytics after user consent
 */
export function AnalyticsProvider() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent on mount
    const checkConsent = () => {
      if (typeof window === 'undefined') return false;

      const consent = localStorage.getItem('cookie-consent');
      if (!consent) return false;

      try {
        const parsed = JSON.parse(consent);
        return parsed.analytics === true;
      } catch {
        return false;
      }
    };

    const consentGranted = checkConsent();
    setHasConsent(consentGranted);

    // Listen for consent changes
    const handleConsentChange = () => {
      const newConsent = checkConsent();
      setHasConsent(newConsent);
      
      if (newConsent) {
        console.log('✅ Analytics consent granted, tracking enabled');
      } else {
        console.log('⛔️ Analytics consent denied');
      }
    };

    // Listen for storage changes (consent updates)
    window.addEventListener('storage', handleConsentChange);

    // Custom event for same-tab consent changes
    window.addEventListener('cookie-consent-updated', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookie-consent-updated', handleConsentChange);
    };
  }, []);

  // Only render Analytics if consent is granted
  if (!hasConsent) {
    console.log('⛔️ Analytics blocked - no consent');
    return null;
  }

  console.log('✅ Analytics active - consent granted');
  return <Analytics />;
}
