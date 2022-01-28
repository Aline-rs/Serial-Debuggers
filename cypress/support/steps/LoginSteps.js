/* /* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que o usuário acessa o site", () => {
    loginPage.acessarSite();
})

And("clica em login", () =>{
    loginPage.clicarBotaoLogin();
})

 When("digita seu e-mail e senha cadastrados", () => {
    loginPage.preencherDados("alinegalli96@gmail.com", "2102120604");
})

Then("ele deve conseguir acessar a plataforma", () => {
    loginPage.loginOK();
})