import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home');

  await page.goto('/about');
  await expect(page).toHaveTitle('Foo');

  await page.goto('/blog');
  await expect(page).toHaveTitle('Blog');

  await page.goto('/tags');
  await expect(page).toHaveTitle('Tags');
});
