var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
	//directConnect: true,
    capabilities: {
        'browserName': 'chrome',
		shardTestFiles: true,
		maxInstances: 2
    },
	framework: 'jasmine',
    specs: ['specs/*.spec.js'],
	SELENIUM_PROMISE_MANAGER: false,
	//webDriverLogDir: 'logs',
	jasmineNodeOpts: {
    	defaultTimeoutInterval: 10000
  	},
	onPrepare: function(){
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: true,
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