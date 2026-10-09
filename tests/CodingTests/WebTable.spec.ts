import {test, expect} from '@playwright/test';

test("Web Table Test", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const matchingRow = page.locator("#employee-body tr").filter({hasText: "Rohan.Mehta"});
    await expect(matchingRow).toHaveCount(1);
    await matchingRow.locator("input[type='checkbox']").check(); 
    await expect(matchingRow.locator("input[type='checkbox']")).toBeChecked();
});