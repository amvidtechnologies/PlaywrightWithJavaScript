import { test } from "@playwright/test";

test.beforeAll(async ({ }) => {
  console.log("beforeAll");
});
test.afterAll(async ({ }) => {
  console.log("afterAll");
});
test.beforeEach(async ({ page }) => {
  // await page.goto("https://demoblaze.com/");
  console.log("afterEach");
});

test.afterEach(async ({ page }, testInfo) => {
  console.log("afterEach");
  // const screenshotBuffer = await page.screenshot({
  //   path: `playwright-report/screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`,
  //   fullPage: true
  // });
  // await testInfo.attach('Full Page Screenshot', {
  //   body: screenshotBuffer,
  //   contentType: 'image/png',
  // });
});