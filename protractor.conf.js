const { SpecReporter } = require('jasmine-spec-reporter');
const json = require('./properties.json');
exports.config = {
    seleniumAddress: json.seleniumAddress,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions', '--start-maximized']
        }
    },

    specs: ['./test/**/specs/**.spec.js'],

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
        username: json.username,
        password: json.password,
        token: json.token,
        baseUrl: json.baseUrl,
        apiBaseUrl: json.apiBaseUrl
    }
};
