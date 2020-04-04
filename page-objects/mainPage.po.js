
const EC = protractor.ExpectedConditions;

var mainPage = function() {
    var dashboardOption = element(by.css('[href="/dashboard"]'));

    this.checkDashVisibility = async() => {
        await browser.wait(EC.visibilityOf(dashboardOption));
    };
};

module.exports = new mainPage();