import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/cybersecurity',
    '/services',
    '/partners',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

