// import {browser} from "protractor";
// import make issues with project

class Base {

    async animationDelay() {
        browser.sleep(10000);
    }

     async waitForVisibility(element) {
        await browser.wait(browser.ExpectedConditions.visibilityOf(element));
        return element.isDisplayed();
    }
}

module.exports.Base = Base;
