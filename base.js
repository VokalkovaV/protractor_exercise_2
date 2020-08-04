// import {browser} from "protractor";

class Base {


    async animationDelay() {
        console.log("here");
        browser.sleep(10000);
        console.log("here");
    }

    async waitForVisibility(elm) {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.invisibilityOf(elm),8000);
        //todo: find why it doesn't work
    }
}

module.exports.Base = Base;
