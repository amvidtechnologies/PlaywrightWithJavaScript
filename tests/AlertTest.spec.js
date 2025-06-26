import { test, expect } from '@playwright/test';
test('simple alert with ok button only', async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    // Set up dialog handler BEFORE the alert triggers
    page.once('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message());
        await dialog.dismiss();
    });
    await page.locator("#alertButton").click();
});

test('handling popup',async ({page})=>{
    await page.goto("https://demoqa.com/browser-windows");
    page.once('popup',async (popup)=>{
        console.log('popup message:', popup.url());
        await popup.waitForLoadState();
        await popup.close();
    })
    await page.locator("#windowButton").click();
    await page.waitForTimeout(3000);
})

test('handling tab',async ({page})=>{
    await page.goto("https://demoqa.com/browser-windows");
    page.once('popup',async ({popup})=>{
        console.log('popup message:', popup.url());
        await popup.waitForLoadState();
        await popup.bringToFront();
        await popup.close();
    })
    await page.locator("#windowButton").click();
    await page.waitForTimeout(3000);
    await page.getByRole('button').click();
    await page.mouse.wheel(0, 300);  // scrolls down by 300px

})


