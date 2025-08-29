import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co')
  await page.locator('input[id="cb1-edit"]').fill('Iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class, \'ui-search-row\')]')).toBeVisible
  //await page.pause
  const titles = await page.locator('//li[contains(@class, \'ui-search-layout__item\')]//div//h3/a').allInnerTexts()
  console.log('The total number of result is: ', titles.length)
  for (let title of titles) {
    console.log('The title is: ', title)
  }
  /*Other Test
  await page.locator('input[class="form"]').fill('Algo') //CSS Selector
  await page.locator('input[class="form"]').fill('Algo')
  await page.locator('//input[@class="form"]').fill('Algo') //Xpath
  await page.locator('#name').fill('Algo') //Id css selector
  await page.getByRole('link', {name: 'Ingresa', exact: true}).click() //Localizo por role, se pone prpiedad cuando hay varios elementos
 */
});
