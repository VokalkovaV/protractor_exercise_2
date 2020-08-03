require('geckodriver');
const webdriver = require('selenium-webdriver');
const page = require('./po.js');


describe('Protractor Demo App', function() {
    let rootPage;

    beforeEach(async function() {
        rootPage = new page.RootPage();
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.root.cz');
    });

    it('found todays "zprávičky" on the root.com and count them. ', async function () {
        console.log('I am in!');
        const zpravickyLink = await rootPage.getZpravickyLink();
        console.log('Element link Zprávičky:' + zpravickyLink);
        await browser.sleep(2000);
        // const EC = protractor.ExpectedConditions;
        // await browser.wait(EC.invisibilityOf(zpravickyLink),8000);//todo: find why it doesn't work
        await zpravickyLink.click();
        await console.log('Card with "Zprávičky" page opens.');
        await browser.sleep(1000);
        let kartySeZpravickami = await rootPage.getKartySeZpravickami();
        console.log('Length of the array with Zprávičky cards: ' + rootPage.getNumberOfKaretSeZpravickami());
        let dnesniZpravicky = [];
        let count = await rootPage.getNumberOfKaretSeZpravickami();
        for(let karta = 0; karta <= count; karta++) {
            let datum = await rootPage.getDatum().get(karta);
            let text = await datum.getText();
            console.log('Date text: ' + text);
            if (text === 'Dnes') {
                dnesniZpravicky.push(karta);
            } else {
                console.log('On the root.cz are ' + dnesniZpravicky.length + ' cards with "Zprávičky" today.');
                break;
            }
        }
    });
});

