import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CyberLegal',
    short_name: 'CyberLegal',
    description: 'CyberLegal practice with 24/7 incident response and proactive compliance across EU, USA and Middle East (GDPR/NIS2/DORA/eIDAS2) and cross-border work.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1220',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo icon black.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo icon white.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/black logo no background.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
      {
        src: '/white logo no background.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}

