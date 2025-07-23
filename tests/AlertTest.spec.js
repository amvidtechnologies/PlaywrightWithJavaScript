import { test, expect } from '@playwright/test';
import { AlertPOM } from '../pages/AlertPOM';

test('simple alert', async ({ page }) => {
    let alertPOM = new AlertPOM(page, expect);
    await alertPOM.goToDemoqa();
    await alertPOM.clickElementsCard();
    await alertPOM.clickAlertsFrameWindowsCategory();
    await alertPOM.clickAlertsTab();
    await alertPOM.alertHandler("You clicked a button", "dismiss");
    await alertPOM.clickSimpleAlert();
});

test('timer alert', async ({ page }) => {
    let alertPOM = new AlertPOM(page, expect);
    await alertPOM.goToDemoqa();
    await alertPOM.clickElementsCard();
    await alertPOM.clickAlertsFrameWindowsCategory();
    await alertPOM.clickAlertsTab();
    await alertPOM.alertHandler("This alert appeared after 5 seconds", "dismiss");
    await alertPOM.clickTimerAlert();
    await page.waitForTimeout(6000);
})

test('confirmbox alert', async ({ page }) => {
    let alertPOM = new AlertPOM(page, expect);
    await alertPOM.goToDemoqa();
    await alertPOM.clickElementsCard();
    await alertPOM.clickAlertsFrameWindowsCategory();
    await alertPOM.clickAlertsTab();
    await alertPOM.alertHandler("Do you confirm action?", "accept");
    await alertPOM.clickConfirmAlert();
    await alertPOM.verifyConfirmMessage("You selected Ok");
})

test('promt alert', async ({ page }) => {
    let alertPOM = new AlertPOM(page, expect);
    await alertPOM.goToDemoqa();
    await alertPOM.clickElementsCard();
    await alertPOM.clickAlertsFrameWindowsCategory();
    await alertPOM.clickAlertsTab();
    await alertPOM.alertHandlerWithMessage("Hello","Please enter your name", "accept");
    await alertPOM.clickPromptAlert();
    await alertPOM.verifyConfirmMessage("You entered Hello");
})


























// test('simple alert with ok button only', async ({ page }) => {
//     await page.goto("https://demoqa.com/alerts");
//     // Set up dialog handler BEFORE the alert triggers
//     page.once('dialog', async (dialog) => {
//         console.log('Alert message:', dialog.message());
//         await dialog.dismiss();
//     });
//     await page.locator("#alertButton").click();
// });

// test('handling popup',async ({page})=>{
//     await page.goto("https://demoqa.com/browser-windows");
//     page.once('popup',async (popup)=>{
//         console.log('popup message:', popup.url());
//         await popup.waitForLoadState();
//         await popup.close();
//     })
//     await page.locator("#windowButton").click();
//     await page.waitForTimeout(3000);
// })

// test.only('handling tab',async ({page})=>{
//     await page.goto("https://demoqa.com/browser-windows");
//     page.once('popup',async ({popup})=>{
//         console.log('popup message:', popup.url());
//         await popup.waitForLoadState();
//         await popup.bringToFront();
//         await popup.close();
//     })
//     await page.locator("#windowButton").click();
// })
