import { test, expect } from '@playwright/test';

/**
 * Smoke tests for all routes
 * Verifies all pages load successfully
 */

test.describe('Route Smoke Tests', () => {
  const routes = [
    { path: '/', title: 'CyberLegal' },
    { path: '/about', title: 'About' },
    { path: '/cybersecurity', title: 'Cybersecurity' },
    { path: '/services', title: 'Services' },
    { path: '/partners', title: 'Partners' },
    { path: '/contact', title: 'Contact' },
    { path: '/legal/privacy', title: 'Privacy Policy' },
    { path: '/legal/terms', title: 'Terms of Use' },
  ];

  for (const route of routes) {
    test(`${route.path} loads successfully`, async ({ page }) => {
      const response = await page.goto(route.path);
      
      // Check response status
      expect(response?.status()).toBe(200);
      
      // Check page title contains expected text
      await expect(page).toHaveTitle(new RegExp(route.title, 'i'));
      
      // Check main content is visible
      const main = page.locator('main');
      await expect(main).toBeVisible();
    });
  }

  test('404 page works', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);
  });
});

