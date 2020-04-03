var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
    capabilities: {
        browserName: 'chrome',
		chromeOptions: {
			args: ['--test-type', '--disable-gpu']
		},
    },
	framework: 'jasmine',
    specs: ['specs/*.spec.js'],
	SELENIUM_PROMISE_MANAGER: false,
	//webDriverLogDir: 'logs',
	jasmineNodeOpts: {
    	defaultTimeoutInterval: 200000
  	},
	onPrepare: function(){
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: false,
			displayFailedSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true
		}));
		var failFast = require('jasmine-fail-fast');
		jasmine.getEnv().addReporter(failFast.init());

		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'Report/screenshots'
		}).getJasmine2Reporter());

    },
}