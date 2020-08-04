// conf.js

const DEFAULT_TIMEOUT  = 30000;
exports.config = {
    // seleniumServerStartTimeout: 11000,
    allScriptsTimeout: DEFAULT_TIMEOUT,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],
    restartBrowserBetweenTests: true,
    getPageTimeout: DEFAULT_TIMEOUT,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutIntervaal: DEFAULT_TIMEOUT,
        print: function () {
        },
    },

    multiCapabilities: [{
        browserName: 'firefox',
    }, {
        browserName: 'chrome',
    }],

    onPrepare: function() {
        beforeEach(async () => {
            browser.resetUrl = 'about:blank';
            console.log('Reset url between tests');
        });
    },

    onComplete: function () {
        browser.quit();
        console.log('Browser quit.');
    }
};

