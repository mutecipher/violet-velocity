import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto('/blog/');
  await expect(page).toHaveTitle('Blog');
});

test('content is correct', async ({ page }) => {
  await page.goto('/blog/');
  await expect(page.locator('h1')).toHaveText('Blog');
  await expect(page.locator('p')).toHaveText('This is where I will post about my journey learning Astro.');
});
