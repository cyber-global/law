import { test, expect } from '@playwright/test';

/**
 * CTA (Call-to-Action) Tests
 * Verifies critical user actions work correctly
 */

test.describe('CTA Tests', () => {
  
  test('Homepage: Hotline CTA has correct tel: link', async ({ page }) => {
    await page.goto('/');
    
    // Find hotline button in hero
    const hotlineButton = page.getByRole('link', { name: /call.*24\/7.*incident.*hotline/i });
    await expect(hotlineButton).toBeVisible();
    
    // Check href starts with tel:
    const href = await hotlineButton.getAttribute('href');
    expect(href).toMatch(/^tel:/);
  });

  test('Homepage: Book consultation CTA navigates to contact', async ({ page }) => {
    await page.goto('/');
    
    // Find book consultation button
    const bookButton = page.getByRole('link', { name: /book.*30.*min.*consultation/i });
    await expect(bookButton).toBeVisible();
    
    // Check it links to contact page
    const href = await bookButton.getAttribute('href');
    expect(href).toContain('/contact');
  });

  test('Homepage: Service cards link to services page', async ({ page }) => {
    await page.goto('/');
    
    // Find a "Learn More" link in service cards
    const learnMoreLinks = page.getByRole('link', { name: /learn more/i });
    const count = await learnMoreLinks.count();
    
    // Should have multiple service cards
    expect(count).toBeGreaterThan(0);
    
    // Check first link goes to services page
    const firstLink = learnMoreLinks.first();
    const href = await firstLink.getAttribute('href');
    expect(href).toContain('/services');
  });

  test('Header: Navigation links work', async ({ page }) => {
    await page.goto('/');
    
    // Click About link
    await page.getByRole('link', { name: /^about$/i }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
    
    // Click Services link
    await page.getByRole('link', { name: /^services$/i }).click();
    await expect(page).toHaveURL('/services');
    await expect(page.locator('h1')).toContainText('Services');
  });

  test('Services page: Talk to Counsel CTA includes topic param', async ({ page }) => {
    await page.goto('/services');
    
    // Find "Talk to Counsel" button
    const talkButton = page.getByRole('link', { name: /talk to counsel/i }).first();
    await expect(talkButton).toBeVisible();
    
    // Check it includes topic query parameter
    const href = await talkButton.getAttribute('href');
    expect(href).toContain('/contact?topic=');
  });

  test('Contact page: Form is visible and functional', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form elements exist
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('Contact page: Topic pre-selection from URL works', async ({ page }) => {
    await page.goto('/contact?topic=readiness');
    
    // Check topic dropdown has correct value
    const topicSelect = page.locator('select[id="topic"]');
    const value = await topicSelect.inputValue();
    expect(value).toBe('readiness');
  });

  test('Footer: Legal links work', async ({ page }) => {
    await page.goto('/');
    
    // Click Privacy Policy link
    await page.getByRole('link', { name: /privacy policy/i }).click();
    await expect(page).toHaveURL('/legal/privacy');
    await expect(page.locator('h1')).toContainText('Privacy');
  });

  test('Alert bar: Call Now button has tel: link', async ({ page }) => {
    await page.goto('/');
    
    // Find alert bar call button
    const alertCallButton = page.locator('.alert-bar, [class*="alert"]').getByRole('link', { name: /call now/i }).first();
    
    if (await alertCallButton.isVisible()) {
      const href = await alertCallButton.getAttribute('href');
      expect(href).toMatch(/^tel:/);
    }
  });
});

