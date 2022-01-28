/* /* global Given, Then, When */

import RegistroPage from '../pageobjects/RegistroPage'
const registroPage = new RegistroPage

Given("que o usuário está na tela de registro", () => {
    registroPage.acessarSite();
    registroPage.clicarBotaoRegistro();
})

 When("digita os dados válidos", () => {
    loginPage.preencherDados("alinegalli96@gmail.com", "2102120604");
})

Then("ele deve conseguir se cadastrar na plataforma", () => {
    loginPage.loginOK();
})