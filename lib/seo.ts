import { DefaultSeoProps } from 'next-seo';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';
export const SITE_NAME = 'CyberGlobal Law';
export const SITE_DESCRIPTION = 
  'Boutique Cyber Law practice with 24/7 incident response and proactive compliance across EU (GDPR/NIS2/DORA/eIDAS2) and cross-border work.';

export const defaultSEOConfig: DefaultSeoProps = {
  defaultTitle: `${SITE_NAME} - When cyber risk turns legal, speed and defensibility matter`,
  titleTemplate: `%s | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@cybergloballaw',
    site: '@cybergloballaw',
    cardType: 'summary_large_image',
  },
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#4F46E5',
    },
    {
      name: 'application-name',
      content: SITE_NAME,
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: SITE_NAME,
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'msapplication-TileColor',
      content: '#4F46E5',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

/**
 * Generate JSON-LD structured data for LegalService
 */
export function generateLegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: '+40745304772', // Placeholder
    priceRange: '$$$',
    areaServed: {
      '@type': 'Place',
      name: 'European Union',
    },
    availableLanguage: ['English', 'Romanian'],
    knowsAbout: [
      'GDPR Compliance',
      'NIS2 Directive',
      'DORA Regulation',
      'eIDAS2',
      'Cybersecurity Law',
      'Data Protection',
      'Incident Response',
      'Digital Forensics',
      'eDiscovery',
    ],
  };
}

/**
 * Generate JSON-LD structured data for Attorney/Person
 */
export function generateAttorneySchema(attorney: {
  name: string;
  role: string;
  bar: string[];
  languages: string[];
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: attorney.name,
    jobTitle: attorney.role,
    worksFor: {
      '@type': 'LegalService',
      name: SITE_NAME,
    },
    knowsLanguage: attorney.languages,
    memberOf: attorney.bar.map((barMembership) => ({
      '@type': 'Organization',
      name: barMembership,
    })),
    image: attorney.image ? `${SITE_URL}${attorney.image}` : undefined,
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40745304772', // Placeholder
      contactType: '24/7 Emergency Hotline',
      availableLanguage: ['English', 'Romanian'],
      areaServed: 'EU',
    },
    sameAs: [
      // Add social media URLs here
    ],
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
