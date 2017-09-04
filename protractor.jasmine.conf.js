exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--disable-extensions', '--start-maximized']
		}
	},

	specs: ['./test/e2e/specs/workspace.spec.js'],

	framework: 'jasmine',

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 3000000
	},

	onPrepare: function() {
		require('jasmine-co').install();
		global.EC = protractor.ExpectedConditions;
	},

	params : {
	    username: '',
		password: '',
		token: '',
		baseUrl: 'https://www.pivotaltracker.com',
		apiBaseUrl: 'https://www.pivotaltracker.com/services/v5'
	}
};
