import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = ['en', 'ro'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale configuration
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Bucharest',
    now: new Date(),
  };
});

/**
 * Get the locale display name
 */
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames: Record<Locale, string> = {
    en: 'English',
    ro: 'Română',
  };
  return displayNames[locale] || locale;
}

/**
 * Get the locale direction (for future RTL support)
 */
export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return 'ltr'; // All supported locales are LTR for now
}

