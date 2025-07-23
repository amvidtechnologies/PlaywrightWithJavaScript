import Navigation from '../locators/Navigation.json'
class AlertPOM {

    // @param {import('@playwright/test').page} page

    constructor(page, expect) {
        this.expect = expect;
        this.page = page;
        this.ElementsCard = Navigation.HomePage.ElementsCard;
        this.AlertsFrameWindowsCategory = Navigation.Category.Main.AlertsFrameWindows;
        this.AlertsTab = Navigation.Category.AlertsFrameWindows.Alerts;
        this.SimpleAlert = "#alertButton";
        this.TimerAlert = "#timerAlertButton";
        this.ConfirmAlert = "#confirmButton";
        this.PromptAlert = "#promtButton";
        this.ConfirmResult = "#confirmResult";
        this.PromptResult = "#promptResult";
    }

    async goToDemoqa() {
        await this.page.goto("https://demoqa.com/", { waitUntil: "load" });
    }

    async clickElementsCard() {
        await this.page.locator(this.ElementsCard).click();
    }
    async clickAlertsFrameWindowsCategory() {
        await this.page.locator(this.AlertsFrameWindowsCategory).click();
    }
    async clickAlertsTab() {
        await this.page.locator(this.AlertsTab).click();
    }
    async clickSimpleAlert() {
        await this.page.locator(this.SimpleAlert).click();
    }
    async clickTimerAlert() {
        await this.page.locator(this.TimerAlert).click();
    }
    async clickConfirmAlert() {
        await this.page.locator(this.ConfirmAlert).click();
    }
    async clickPromptAlert() {
        await this.page.locator(this.PromptAlert).click();
    }
    async verifyConfirmMessage(expectedText) {
        await this.expect(
            Promise.any([
                this.page.locator(this.ConfirmResult).textContent(),
                this.page.locator(this.PromptResult).textContent()
            ])
        ).resolves.toEqual(expectedText);
    }
    async alertHandler(expectedMessage, expectedAction) {
        this.page.once('dialog', async (dialog) => {
            let actualMessage = dialog.message();
            await this.expect(actualMessage).toEqual(expectedMessage);
            if (expectedAction === "accept") {
                await dialog.accept();
            }
            else if (expectedAction === "dismiss") {
                await dialog.dismiss();
            }
        })
    }
    async alertHandlerWithMessage(enterText, expectedMessage, expectedAction) {
        this.page.once('dialog', async (dialog) => {
            let actualMessage = dialog.message();
            await this.expect(actualMessage).toEqual(expectedMessage);
            if (expectedAction === "accept") {
                await dialog.accept(enterText);
            }
            else if (expectedAction === "dismiss") {
                await dialog.dismiss(enterText);
            }
        })
    }
}

module.exports = { AlertPOM };