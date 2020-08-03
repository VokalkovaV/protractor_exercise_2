const {By} = require('selenium-webdriver');

class Page {
    constructor(browser) {
        this.browser = browser;
    }

    getZpravickyLink() {
        return this.zpravickyLink.get(0);
    }

    getKartySeZpravickami() {
        return this.kartySeZpravickami;
    }

    getNumberOfKaretSeZpravickami() {
        return this.getKartySeZpravickami().count();
    }

    getDatum(){
        return this.datum;
    }
}


class RootPage extends Page {
    constructor(browser) {
        super(browser);
        this.zpravickyLink = element.all(by.css('.design-navigation__layout-cell .navigation__link[href="/zpravicky/"]'));
        this.kartySeZpravickami = element.all(by.css('.design-article--without-image.design-article.design-tile'));
        this.datum = element.all(by.css('span.design-impressum__item'));
    }
}

module.exports.RootPage = RootPage;