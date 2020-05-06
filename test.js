require('geckodriver');
const webdriver = require('selenium-webdriver');


describe('Protractor Demo App', function() {
    beforeEach(async function() {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.root.cz');
    });

    it('found todays "zprávičky" on the root.com and count them. ', async function () {
        console.log('I am in!');
        // await browser.sleep(2000);
        const zpravickyLink = await element.all(by.css('.design-navigation__layout-cell .navigation__link[href="/zpravicky/"]')).get(0);
        // const EC = protractor.ExpectedConditions;
        // await browser.wait(EC.invisibilityOf(zpravickyLink),8000);//todo: find why it doesn't work
        await zpravickyLink.click();
        await console.log('Otevře se stránka se Zprávičkami.');
        await browser.sleep(3000);
        const kartySeZpravickami = await element.all(by.css('.design-article--without-image.design-article.design-tile')).get(0);
        // const kartaSeZpravickou = kartySeZpravickami.get(0);
        const datum = kartySeZpravickami.element(by.css('span.design-impressum__item')).getText();
        await console.log(datum);
        await expect(await datum).toEqual('Dnes');
        await browser.sleep(3000);

        for(let i = 0 ; i<5; i++){


        }

    });

//  const kartaSeZpravickou = driver.getElement.all(by.css('karta se zpravickou');
//  const spodniCastKarty = kartaSeZpravickou.element(by.css('spodniCastKartyElement');
//  const datum = spodniCastKart.element(by.css('datum').getText();
//
//  const dnesniZpravicky = [];
//  const zpravicka;
//
//  for (i = 0; i < (notNowKnownNumber); i++) {
//    kartaSeZpravickou.get(index++)//nevím zatím jak to technicky udělat, jen vím, že by měl brát karty od indexu 0 dál
//    if(if datum.contains('dnes') {
//        dnesniZpravicky.push(kartaSeZpravickou);
//    }
//
//    else() {
//        console.log('Dnesnich zpravicek na prvni strane je: ');
//        console.log(dnesniZpravicky.length+1);
//        break
//   }




});