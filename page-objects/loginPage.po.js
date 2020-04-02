
var EC = protractor.ExpectedConditions;

var loginPage = function() {
    
    var loginField = element(by.id('login'));
    var passwordField = element(by.id('password'));
    var acessarBtn = element(by.css('[type="submit"]'));
    
    this.visit = async() => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://polocesar.herokuapp.com/login');
    };

    this.fillLogin = async() => {
        await browser.wait(EC.elementToBeClickable(loginField));
        await loginField.sendKeys('admin@hotmail.com');
    };

    this.fillPassword = async() => {
        await browser.wait(EC.elementToBeClickable(passwordField));
        await passwordField.sendKeys('admin');
    };
}

module.exports = new loginPage;