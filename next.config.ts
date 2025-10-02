import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Typed routes
  typedRoutes: true,
  
  // Enable ISR for MDX pages
  // Pages will be regenerated in the background
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 180, // 3 minutes for static pages
    },
  },
};

export default withContentlayer(withNextIntl(nextConfig));
