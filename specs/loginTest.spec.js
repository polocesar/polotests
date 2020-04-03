var loginPage = require('../page-objects/loginPage.po');

describe('Login Test Suite', function() {
   
    describe('Teste com login inválido: ', () => {     
        it('Abrindo página...', async() => {
            await loginPage.visit();
        });
        it('Preenchendo login...', async() => {
            await loginPage.fillWrongLogin();
        });
        it('Preenchendo senha...', async() => {
            await loginPage.fillPassword();
        });
        it('Logando...', async() => {
            await loginPage.clickToLogin();
        });
        it('Verificando se foi retornado exceçao...', async() => {
            await loginPage.verifyErrorMsg();
        });
    });
    describe('Fluxo feliz: ', () => {
        it('Preenchendo login...', async() => {
            await loginPage.fillLogin();
        });
        it('Preenchendo senha...', async() => {
            await loginPage.fillPassword();
        });
        it('Logando...', async() => {
            await loginPage.clickToLogin();
        });
    });
    
});