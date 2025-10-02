import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Strict Transport Security (HSTS) - Force HTTPS
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // Frame Options - Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Content Type Options - Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // XSS Protection - Legacy but still useful
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Referrer Policy - Control referrer information
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy - Disable sensitive browser features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()'
  );
  
  // DNS Prefetch Control
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  // Content Security Policy (CSP) - Strict per BRIEF
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://*.vercel-scripts.com https://va.vercel-scripts.com https://cal.com https://*.cal.com https://challenges.cloudflare.com https://embed.cal.com;
    style-src 'self' 'unsafe-inline' https://cal.com https://*.cal.com;
    img-src 'self' blob: data: https: https://*.vercel-insights.com https://cal.com https://*.cal.com;
    font-src 'self' data: https://cal.com https://*.cal.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://cal.com https://*.cal.com https://embed.cal.com https://challenges.cloudflare.com;
    connect-src 'self' https://vercel.live https://*.vercel-insights.com https://*.vercel-scripts.com https://va.vercel-scripts.com https://cal.com https://*.cal.com https://api.cal.com https://challenges.cloudflare.com;
    worker-src 'self' blob:;
    manifest-src 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};


