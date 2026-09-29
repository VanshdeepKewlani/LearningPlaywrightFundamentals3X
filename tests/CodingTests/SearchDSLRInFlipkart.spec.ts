import { test, expect } from '@playwright/test';

test('Search DSLR in Flipkart', async ({ page }) => {
    await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: '✕' }).click();
    await page.getByPlaceholder('Search for products, brands and more').first().fill('DSLR camera');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page).toHaveURL(/.*DSLR.*/);

    const nextButton = page.getByRole('link', { name: 'Next' });

    while (true) {

    const productNames: string[] = await page.locator('.RG5Slk').allInnerTexts();

    const productPrices: string[] = await page.locator('.hZ3P6w.DeU9vF').allInnerTexts();


    for(let i=0; i < productNames.length; i++) {
        console.log(`Product Name: ${productNames[i]}, Product Price: ${productPrices[i]}`);
    }

    if (!(await nextButton.isVisible())) {
        break;
    }
    const nextPageHref = await nextButton.getAttribute('href');
    if (!nextPageHref) {
        break;
    }
    await page.goto(new URL(nextPageHref, page.url()).toString(), { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.RG5Slk').first()).toBeVisible();

    } 
            
});