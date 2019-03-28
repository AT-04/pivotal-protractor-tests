const { SpecReporter } = require('jasmine-spec-reporter');
const json = require('./environment.json');
exports.config = {
    seleniumAddress: json.seleniumAddress,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions', '--start-maximized']
        }
    },

    specs: ['./**/specs/**/**.spec.js'],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000
    },

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(15000);
        browser.get(`${browser.params.baseUrl}/signin`);
        jasmine.getEnv().addReporter(new SpecReporter());
    },

    params: {
        baseUrl: json.baseUrl,
    }
};
