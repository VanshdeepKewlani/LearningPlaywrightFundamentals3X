import { test, expect} from '@playwright/test';

test('Shadow DOM', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.locator("#kils").fill("Vanshdeep");
    await page.locator("#pizza").fill("Margherita");
    await page.keyboard.press("Tab");   //for navigating to Concept Test control
    await page.keyboard.type("Playwright");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");   //double tab for navigating to Password control as it is in Closed ShadowRoot 
    await page.keyboard.type("123456");

});