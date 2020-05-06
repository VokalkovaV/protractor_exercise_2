// let page = require('./po');
// require('geckodriver');
// const webdriver = require('selenium-webdriver');
//
// describe('Protractor Demo App', function() {
//     let browser;
//     let rootPageObject;
//
//     beforeEach(async function() {
//         browser = new webdriver.Builder().forBrowser('firefox').build();
//         rootPageObject = new page.RootPage(browser);
//         await browser.get('https://www.root.cz');
//     });
//
//     it('found todays "zprávičky" on the root.com and count them. ', async function () {
//         console.log('I am in!');
//         // await browser.wait(
//         //     browser.ExpectedConditions.presenceOf(rootPageObject.getZpravicky()),
//         //     1000,
//         //     'Zprávičky link nenalezen',
//         // );//todo: find why it doesn't work
//         const zpravickyLink = await
//         await rootPageObject.getZpravicky().click();
//         await console.log('Otevře se stránka se Zprávičkami.');
//         await browser.sleep(3000);
//         await console.log(rootPageObject.getKartaSeZpravickou(0));
//         await rootPageObject.getKartaSeZpravickou(0).click();
//
//     });
//
// //  const kartaSeZpravickou = driver.getElement.all(by.css('karta se zpravickou');
// //  const spodniCastKarty = kartaSeZpravickou.element(by.css('spodniCastKartyElement');
// //  const datum = spodniCastKart.element(by.css('datum').getText();
// //
// //  const dnesniZpravicky = [];
// //  const zpravicka;
// //
// //  for (i = 0; i < (notNowKnownNumber); i++) {
// //    kartaSeZpravickou.get(index++)//nevím zatím jak to technicky udělat, jen vím, že by měl brát karty od indexu 0 dál
// //    if(if datum.contains('dnes') {
// //        dnesniZpravicky.push(kartaSeZpravickou);
// //    }
// //
// //    else() {
// //        console.log('Dnesnich zpravicek na prvni strane je: ');
// //        console.log(dnesniZpravicky.length+1);
// //        break
// //   }
//
//
//
//
// });