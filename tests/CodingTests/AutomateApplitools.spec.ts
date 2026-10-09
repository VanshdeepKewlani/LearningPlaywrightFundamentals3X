import { test, expect } from '@playwright/test';
import { spentEarned } from './utils';

test('Automate Applitools', async ({ page }) => {
    await page.goto("https://demo.applitools.com/");
    await page.getByPlaceholder("Enter your username").fill("Admin");
    await page.getByPlaceholder("Enter your password").fill("Password@123");
    await page.getByText("Sign in").click();
    await expect(page).toHaveURL("https://demo.applitools.com/app.html");
    await expect(page.locator("table.table-padded tbody tr").first()).toBeVisible();
    let amounts = await page.locator("table.table.table-padded tbody tr td:last-child").allInnerTexts();
    console.log("Amounts: ", amounts);

    const result = spentEarned(amounts);
    const total = result.earnedAmount - result.spentAmount;
    console.log("Total: ", total);

    expect(total).toBeCloseTo(1996.22, 2);
});