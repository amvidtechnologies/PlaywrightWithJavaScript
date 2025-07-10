import { test, expect } from '@playwright/test';
import '../hooks/hooks.js'
test('Select Value Bootstrap Dropdown', async ({ page }) => {
    await page.goto("https://demoqa.com/", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    await page.reload({waitUntil:'load'});
    expect.soft(await page.locator("//img[@src='/images/Toolsqa.jpg']").isVisible()).toBeTruthy();
    let actualCardsText = await page.locator(".category-cards .card-body h5").allInnerTexts();
    let expectedCardsText = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
    expect(actualCardsText.length,"actual Cards length not match with expected Cards").toEqual(expectedCardsText.length);
    expect(expectedCardsText.every((val, i) => val === actualCardsText[i]),"actual Cards name not match with expected Cards").toBeTruthy();
    await page.locator("//*[text()='Elements']").click();
    await page.locator("//div[text()='Widgets']//ancestor::div[@class='element-group']").click();
    await page.locator("//span[text()='Select Menu']//parent::li").click();
    expect((await page.locator(`.text-center`).innerText()).trim()).toEqual(`Select Menu`);
    await page.locator(`#withOptGroup`).click();
    await page.locator(`//*[text()='A root option']`).click();
    await page.locator(`#selectOne`).click();
    await page.locator(`//*[text()='Prof.']`).click();
})

test('Select One Bootstrap Dropdown', async({page})=>{
    await page.goto(`https://demoqa.com/`,{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(1000);
    await page.reload({waitUntil:'load'});
    await page.locator("//*[text()='Elements']").click();
    await page.locator("//div[text()='Widgets']//ancestor::div[@class='element-group']").click();
    await page.locator("//span[text()='Select Menu']//parent::li").click();
    await page.locator(`#selectOne`).click();
    await page.locator(`//*[text()='Prof.']`).click();
})

test(`Old Select Menu Dropdown`,async({page})=>{
    await page.goto(`https://demoqa.com/`,{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(1000);
    await page.reload({waitUntil:'load'});
    await page.locator("//*[text()='Elements']").click();
    await page.locator("//div[text()='Widgets']//ancestor::div[@class='element-group']").click();
    await page.locator("//span[text()='Select Menu']//parent::li").click();
    await page.locator(`#oldSelectMenu`).selectOption({value:'10'});
    await page.locator(`#oldSelectMenu`).selectOption({label:`White`});
    await page.locator(`#oldSelectMenu`).selectOption({index:2});
    await page.waitForTimeout(10000);
})

test(`Select Multiple Option Dropdown`,async({page})=>{
    await page.goto(`https://demoqa.com/`,{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(1000);
    await page.reload({waitUntil:'load'});
    await page.locator("//*[text()='Elements']").click();
    await page.locator("//div[text()='Widgets']//ancestor::div[@class='element-group']").click();
    await page.locator("//span[text()='Select Menu']//parent::li").click();
    await page.locator(`(//*[text()='Multiselect drop down']//following::div)[1]`).click();
    await page.locator(`//div[text()='Green']`).click();
    await page.locator(`//div[text()='Black']`).click();
    await page.locator(`//div[text()='Red']`).click();
})