import { test, expect } from '@playwright/test';
import { DataGenerator } from '../../utils/dataGenerator';

test('Crear y completar un TODO', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  const task = `Task ${DataGenerator.randomNumber(1000, 9999)}`;

  console.log(`Task generated: ${task}`);

  await page.getByPlaceholder('What needs to be done?').fill(task);
  await page.keyboard.press('Enter');

  await expect(page.locator('.todo-list li')).toContainText(task);

  const item = page.locator('.todo-list li').filter({ hasText: task });
  console.log(`Item generated: ${item}`);
  await item.locator('.toggle').check();
  await expect(item).toHaveClass("completed");

  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(1);
});
