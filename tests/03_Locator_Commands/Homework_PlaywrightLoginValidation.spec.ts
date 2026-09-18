import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
    let url = "https://app.thetestingacademy.com/playwright/multiple_element_filter";
    await page.goto(url);

    const emailAddress: string = "test@example.com"
    const password: string = "testpassword"

    await page.locator("//input[@id='email']").fill(emailAddress);
    await page.locator("//input[@id='password']").fill(password);
    await page.locator("//input[@name='remember']").check();
    await page.locator("//button[@type='submit']").click();

    // expect(await page.locator("//button[@type='submit']")).toBeVisible();
    // expect(await page.locator("//button[@type='submit']")).toHaveText('Login to Practice Account')

    expect(await page.url()).not.toBe(url);
    expect(await page.url()).toContain("test%40example.com");
    expect(await page.url()).toContain(password);
    expect(await page.url()).toContain("remember=yes");
    expect(await page.url()).toContain("login-success");

    await page.close();

});