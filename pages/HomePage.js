exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.HomeButton = "//a[contains(text(),'Home')]";
        this.ContactButton = "//a[contains(text(),'Contact')]";
        this.AboutUs = "//a[contains(text(),'About us')]";

    }

    async goTo(){
        await this.page.goto("https://demoblaze.com/");
    }

    async clickHomeButton(){
        await this.page.locator(this.HomeButton).click();
    }
    async clickContactButton(){
        await this.page.locator(this.ContactButton).click();
    }
    async clickAboutUs(){
        await this.page.locator(this.AboutUs).click();
    }

}