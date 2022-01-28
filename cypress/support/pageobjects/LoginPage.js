/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoLogin() {
        cy.get(loginElements.botaoLogin()).click();
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    preencherDados(email, senha) {
        cy.get(loginElements.caixaEmail()).type(email)
        cy.get(loginElements.caixaSenha()).type(senha)
    }
    //Conclui login
    loginOK(){
        cy.get('form > .buttons > .button-1').click()
    }
}
export default LoginPage;