import { test, expect } from '@playwright/test';

test('Automate OrangeHRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

    await page.getByPlaceholder('First Name').fill('Vanshdeep');
    await page.getByPlaceholder('Last Name').fill('Kewlani');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    console.log(page.getByRole('rowgroup').filter({ hasText: 'Vanshdeep' }));
    // .locator('preceding-sibling:div').locator("preceding-sibling:div").first().check();
});