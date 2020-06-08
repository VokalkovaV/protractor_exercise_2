require('geckodriver');
const webdriver = require('selenium-webdriver');


describe('Protractor Demo App', function() {
    beforeEach(async function() {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.root.cz/zpravicky/');
    });

    it('found todays "zprávičky" on the root.com and count them. ', async function () {
        // console.log('I am in!');
        // // await browser.sleep(2000);
        // const zpravickyLink = await element.all(by.css('.design-navigation__layout-cell .navigation__link[href="/zpravicky/"]')).get(0);
        // console.log('Element link Zprávičky:' + zpravickyLink);
        // // const EC = protractor.ExpectedConditions;
        // // await browser.wait(EC.invisibilityOf(zpravickyLink),8000);//todo: find why it doesn't work
        // await zpravickyLink.click();
        // await console.log('Otevře se stránka se Zprávičkami.');
        await browser.sleep(1000);
        let kartySeZpravickami = element.all(by.css('.design-article--without-image.design-article.design-tile'));
        console.log('Karty se zprávičkami ' + kartySeZpravickami.get(0));
        console.log('Délka pole karet se zprávičkami: ' + kartySeZpravickami.count());
        let dnesniZpravicky = [];

        for(let karta = 0; karta <= 30; karta++) {
            console.log('Karta: ' + kartySeZpravickami.get(karta));
            let datum = await element.all(by.css('span.design-impressum__item')).get(karta);
            let text = await datum.getText();
            console.log('Datum: ' + datum);
            console.log('Text data: ' + text);
            if (text === 'Dnes') {
                dnesniZpravicky.push(karta);
            } else {
                console.log('Na root.cz je dnes ' + dnesniZpravicky.length + ' dnešních zpráviček.');
                break;
            }
        }
    });
});

