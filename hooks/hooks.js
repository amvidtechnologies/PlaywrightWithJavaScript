import { test } from "@playwright/test";

test.beforeAll(async ({}) => {
  console.log("beforeAll");
});
test.afterAll(async ({}) => {
  console.log("afterAll");
});
test.beforeEach(async ({page}) => {
  await page.goto("https://demoblaze.com/");
  console.log("afterEach");
});
test.afterEach(async ({page}) => {
  await page.close();
  console.log("afterEach");
});