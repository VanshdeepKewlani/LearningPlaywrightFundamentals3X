import {test, expect} from '@playwright/test';

test('Automate Hover Menus', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();
    await page.getByRole("menuitem", { name: "Wi-Fi" }).click();
    const outputText = await page.getByTestId("hover-output").innerText();
    console.log(outputText);
    const responseJson = JSON.parse(outputText);
    expect(responseJson.clicked).toContain("Wi-Fi");
    expect(responseJson.testId).toBe("test-id-Wifi");
});