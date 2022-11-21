import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home');
});

test('content is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h2')).toHaveText('My awesome blog subtitle');
  await expect(page.locator('h3')).toHaveText(/Thank you for visiting!/);
  await expect(page.locator('button')).toHaveText('New greeting');
});
