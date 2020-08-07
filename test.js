require('geckodriver');
// const webdriver = require('selenium-webdriver');
const page = require('./po.js');
const base = require('./base');

//todo: find solution for protractor import issue

describe('Protractor practice - ', function() {
    let rootPage;
    let baseInstance;

    beforeEach(async function() {
        rootPage = new page.RootPage();
        baseInstance = new base.Base();
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.root.cz');
        await console.log('Test is starting.');
    });

    it('Find today\'s news on the root.com and count them ', async function () {
        const zpravickyLink = await rootPage.getZpravickyLink();
        await baseInstance.animationDelay();
        await zpravickyLink.click();
        await console.log('Page with news opens.');
        await baseInstance.animationDelay();
        let dnesniZpravicky = [];
        let count = await rootPage.getNumberOfKaretSeZpravickami();
        console.log('Length of the array with news cards: ' +  count);
        for(let karta = 0; karta <= count; karta++) {
            let datum = await rootPage.getDatum().get(karta);
            let text = await datum.getText();
            if (text === 'Dnes') {
                dnesniZpravicky.push(karta);
            } else {
                if(dnesniZpravicky.length === 0) {
                    console.log('On the root.cz is ' + dnesniZpravicky.length + ' news cards today.');
                    break;
                }
                if(dnesniZpravicky.length === 1) {
                    console.log('On the root.cz is ' + dnesniZpravicky.length + ' news card today');
                    break;
                }
                if(dnesniZpravicky.length > 1) {
                    console.log('On the root.cz are ' + dnesniZpravicky.length + ' news cards today');
                    break;
                }
            }
        }

    });
});

