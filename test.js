require('geckodriver');
// require = require("esm")(module);
const webdriver = require('selenium-webdriver');
const page = require('./po.js');
const base = require('./base');

//todo: find solution for import issue

describe('Protractor Demo App', function() {
    let rootPage;
    let baseInstance;

    beforeEach(async function() {
        rootPage = new page.RootPage();
        baseInstance = new base.Base();
        console.log("base", base);
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.root.cz');
    });

    it('found todays "zprávičky" on the root.com and count them. ', async function () {
        console.log('I am in!');
        const zpravickyLink = await rootPage.getZpravickyLink();
        console.log('Element link Zprávičky:' + zpravickyLink);
        // await base.waitForVisibility(zpravickyLink);
        await zpravickyLink.click();
        await console.log('Card with "Zprávičky" page opens.');
        await baseInstance.animationDelay();
        let kartySeZpravickami = await rootPage.getKartySeZpravickami();
        let dnesniZpravicky = [];
        let count = await rootPage.getNumberOfKaretSeZpravickami();
        console.log('Length of the array with Zprávičky cards: ' +  count);
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

