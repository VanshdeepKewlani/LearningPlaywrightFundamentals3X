import { test, expect } from '@playwright/test';

test("Profile Pic Update", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/login");
    await page.getByPlaceholder("Enter your email address").fill("vkewlani@gmail.com");
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page.getByRole("link", { name: "Settings" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await page.locator("#avatar-upload").setInputFiles("C:\\Automation\\LearningPlaywrightFundamentals3X\\WP_20150701_006.jpg");

    await page.close();
})
