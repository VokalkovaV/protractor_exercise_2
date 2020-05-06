// class Page {
//     constructor(browser) {
//         this.browser = browser;
//     }
//
//     getZpravicky() {
//         return this.browser.findElement(this.zpravickyLink);
//     }
//
//     getKartaSeZpravickou(number) {
//         return this.browser.findElement.all(this.getKartaSeZpravickou()).get(number);
//     }
// }
//
// class RootPage extends Page {
//     constructor(browser) {
//         super(browser);
//         this.zpravickyLink = by.css('.navigation__link[href="/zpravicky/"]');
//         this.kartaSeZpravickou = by.css('.design-box__content .design-list__item .design-article--without-image.design-article design-tile');
//         // this.datumKarty;
//
//     }
// }
//
// module.exports.RootPage = RootPage;