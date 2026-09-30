import { test, expect } from '@playwright/test';

test('Fill QA Profile Form', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.getByTestId("first-name").fill("Vanshdeep");
    await page.getByTestId("last-name").fill("Kewlani");
    await page.getByTestId("gender-male").click();
    await page.getByTestId("years-experience").selectOption("5");
    await page.getByTestId("profile-date").fill("2024-06-15");
    await page.getByTestId("profession-automation").check();
    await page.getByTestId("tool-protractor").check();
    await page.getByTestId("tool-selenium").check();
    await page.getByTestId("continent-asia").check();
    await page.getByTestId("continent-europe").check();
    await page.getByTestId("profile-submit").click();

    const responseMessage = await page.locator("#submission-output").innerText();
    console.log(responseMessage);
    const responseJson = JSON.parse(responseMessage);
    await expect(responseJson.firstName).toBe("Vanshdeep");
    await expect(responseJson.lastName).toBe("Kewlani");
    await expect(responseJson.gender).toBe("Male");
    await expect(responseJson.yearsExperience).toBe("5");
    await expect(responseJson.date).toBe("2024-06-15");
    await expect(responseJson.profession).toContain("Automation Tester");
    await expect(responseJson.tools).toContain("Protractor");
    await expect(responseJson.tools).toContain("Selenium Webdriver");
    await expect(responseJson.continents).toContain("Asia");
    await expect(responseJson.continents).toContain("Europe");

})