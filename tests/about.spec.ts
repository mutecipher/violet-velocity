import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto('/about/');
  await expect(page).toHaveTitle('About');
});

test('content is correct', async ({ page }) => {
  const paragraphs = [
    `
      I am working through Astro's introductory tutorial. This is the second page
      on my website, and it's the first one I built myself.
    `,
    `
      This site will update as I complete more of the tutorial, so keep checking
      back and see how my journey is going!
    `,
    "Here are a few facts about me:",
    "My skills are:",
    "I finished this tutorial",
    "My goal is to finish in 3 days."
  ]
  await page.goto('/about/');
  await expect(page.locator('h1')).toHaveText('About');
  await expect(page.locator('p')).toHaveText(paragraphs);
});
