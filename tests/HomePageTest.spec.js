// import { test, expect } from '@playwright/test';
// import { HomePage } from '../pages/HomePage';
// import '../hooks/hooks.js';
// test("Home Page",async ({page})=>{
//     const homePage = new HomePage(page);
//     await homePage.clickAboutUs();
//     await expect(page.locator("//h5[text()='About us']")).toBeVisible();
//     await page.locator("(//h5[text()='About us']//following::span)[1]").click();
//     await homePage.clickContactButton();
//     await expect.soft(page.locator("//h5[text()='New message']")).toBeVisible();
//     await page.locator("(//h5[text()='New message']//following::span)[1]").click();
//     await homePage.clickHomeButton();
// });