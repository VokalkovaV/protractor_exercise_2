const {By} = require('selenium-webdriver');

class Page {
    constructor(driver) {
        this.driver = driver;
    }

    getZpravicky() {
        return this.driver.findElement(this.zpravickyLink);
    }

    getKartaSeZpravickou() {
        return this.driver.findElement(this.getKartaSeZpravickou()).index();
    }
}

class RootPage extends Page {
    constructor(driver) {
        super(driver);
        this.zpravickyLink = By.css('.navigation__link[href="/zpravicky/"]');
        this.kartaSeZpravickou = By.css('.design-box__content .design-list__item');
        // this.datumKarty;

    }
}

module.exports.RootPage = RootPage;