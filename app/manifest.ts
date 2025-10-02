import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CyberGlobal Law',
    short_name: 'CyberGlobal Law',
    description: 'Boutique Cyber Law practice with 24/7 incident response and proactive compliance across EU (GDPR/NIS2/DORA/eIDAS2) and cross-border work.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1220',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

