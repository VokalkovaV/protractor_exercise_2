let page = require('./po');
require('geckodriver');
const webdriver = require('selenium-webdriver');

describe('Protractor Demo App', function() {
    let driver;
    let rootPageObject;

    beforeEach(async function() {
        driver = new webdriver.Builder().forBrowser('firefox').build();
        rootPageObject = new page.RootPage(driver);
        await browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
       console.log('I am in');
    });


});