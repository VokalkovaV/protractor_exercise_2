const suites = require('./suites');
const DEFAULT_TIMEOUT  = 30000;

exports.config = {
    allScriptsTimeout: DEFAULT_TIMEOUT,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites,
    restartBrowserBetweenTests: true,
    getPageTimeout: DEFAULT_TIMEOUT,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutIntervaal: DEFAULT_TIMEOUT,
        print: function () {},
    },

    capabilities: {
        browserName: 'firefox'
    },

    // multiCapabilities: [{
    //     browserName: 'firefox',
    // }, {
    //     browserName: 'chrome',
    // }],

    onPrepare: function() {
        beforeEach(async () => {
            browser.resetUrl = 'about:blank';
            console.log('Reset url between tests');
            console.log('Test is starting.');
        });
    },

    onComplete: function () {
        browser.quit();
        console.log('Browser quit.');
    }
};

