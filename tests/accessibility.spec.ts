import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility tests using Axe
 * Checks critical pages for a11y violations
 * Fails CI on critical issues
 */

test.describe('Accessibility Tests', () => {
  
  test('Homepage: No critical a11y violations', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    // Fail test if critical or serious violations found
    const criticalViolations = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test('Services page: No critical a11y violations', async ({ page }) => {
    await page.goto('/services');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test('Contact page: No critical a11y violations', async ({ page }) => {
    await page.goto('/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test('About page: No critical a11y violations', async ({ page }) => {
    await page.goto('/about');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test('Legal Privacy: No critical a11y violations', async ({ page }) => {
    await page.goto('/legal/privacy');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test('Homepage: Keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Tab to skip link
    await page.keyboard.press('Tab');
    const skipLink = page.getByText(/skip to content/i);
    await expect(skipLink).toBeFocused();
    
    // Press Enter on skip link
    await page.keyboard.press('Enter');
    
    // Should focus main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('Contact form: Labels associated with inputs', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form labels are properly associated
    const nameInput = page.getByLabel(/name/i);
    await expect(nameInput).toBeVisible();
    
    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toBeVisible();
    
    const messageInput = page.getByLabel(/message/i);
    await expect(messageInput).toBeVisible();
  });

  test('Homepage: Heading hierarchy is correct', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // H1 should be the hero headline
    const h1 = page.locator('h1');
    await expect(h1).toContainText(/cyber risk turns legal/i);
  });

  test('All pages: Have skip to content link', async ({ page }) => {
    const pages = ['/', '/about', '/services', '/contact'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      const skipLink = page.getByText(/skip to content/i);
      await expect(skipLink).toBeAttached();
    }
  });
});

