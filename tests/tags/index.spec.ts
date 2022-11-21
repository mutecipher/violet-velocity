import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto('/tags');
  await expect(page).toHaveTitle('Tags');
});

test('content is correct', async ({ page }) => {
  await page.goto('/tags');
  await expect(page.locator('h1')).toHaveText('Tags');
  await expect(page.locator('div').last()).toHaveClass(/tags/);
});
