
var EC = protractor.ExpectedConditions;

var loginPage = function() {
    
    var loginField = element.all(by.id('login')).first();
    var passwordField = element.all(by.id('password')).first();
    var errorMsg = element(by.id('error'));
    var acessarBtn = element(by.css('[type="submit"]'));
    
    this.visit = async() => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://polocesar.herokuapp.com/login');
    };

    this.fillLogin = async() => {
        await browser.wait(EC.visibilityOf(loginField));
        await loginField.sendKeys('admin@hotmail.com');
    };

    this.fillPassword = async() => {
        await browser.wait(EC.visibilityOf(passwordField));
        await passwordField.sendKeys('admin');
    };

    this.fillWrongLogin = async() => {
        await browser.wait(EC.visibilityOf(loginField));
        await loginField.sendKeys('teste@teste');
    };

    this.verifyErrorMsg = async() => {
        await browser.wait(EC.visibilityOf(errorMsg));
    };

    this.clickToLogin = async() => {
        await acessarBtn.click();
    };

};

module.exports = new loginPage;