import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage Accessibility - Color Contrast", () => {
  test("homepage has no critical a11y issues", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    
    // Fail if any contrast violations
    const contrast = results.violations.filter(v => v.id === "color-contrast");
    expect(contrast).toEqual([]);
    
    // Also check for critical violations
    const critical = results.violations.filter(v => v.impact === "critical" || v.impact === "serious");
    expect(critical).toEqual([]);
  });
});

test.describe("Services Page Accessibility - Color Contrast", () => {
  test("services page has no contrast violations", async ({ page }) => {
    await page.goto("/services");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    
    const contrast = results.violations.filter(v => v.id === "color-contrast");
    expect(contrast).toEqual([]);
  });
});

test.describe("Contact Page Accessibility - Color Contrast", () => {
  test("contact page has no contrast violations", async ({ page }) => {
    await page.goto("/contact");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    
    const contrast = results.violations.filter(v => v.id === "color-contrast");
    expect(contrast).toEqual([]);
  });
});

