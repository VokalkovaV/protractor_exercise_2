// import {browser} from "protractor";
// import make issues with project

class Base {

    async animationDelay() {
        browser.sleep(10000);
    }

    async waitForVisibility(elm) {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.invisibilityOf(elm),8000);
        //todo: find why it doesn't work and after it implement function
    }
}

module.exports.Base = Base;
