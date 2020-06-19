// class Page {
//     constructor(browser) {
//         this.browser = browser;
//     }
//
//     getElement(element) {
//         return this.browser.element(element);
//     }
//
//     getElements(elements) {
//         return this.browser.element.all(elements);
//     }
// }
//
// class RootPage extends Page {
//     constructor(browser) {
//         super(browser);
//         this.zpravickyLink = by.css('.design-navigation__layout-cell .navigation__link[href="/zpravicky/"]').get(0);
//         this.kartySeZpravickami = by.css('.design-article--without-image.design-article.design-tile');
//         this.datum = by.css('span.design-impressum__item');
//     }
// }
//
// module.exports.RootPage = RootPage;