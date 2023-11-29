import { test, expect } from '@playwright/test';
import { countReset } from 'console';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test("test_counter", async ({ page }) => {
//   await page.goto("http://localhost:5173/");

//   await page.getByRole("button", { name: "" }).click();

//   await expect(page.getByRole('button', { name: ""})).toBeVisible();
// })

test('vérification du counter 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const Count = page.getByRole('button')
  await expect(Count).toContainText('count is 0')
});

test('counter 2', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('.button_counter').click();
  await page.getByRole('button', { name: 'count is' }).click();
  await expect(page.getByRole('button')).toContainText('count is 2');
});