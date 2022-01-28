/// <reference types="Cypress" />

import RegistroElements from '../elements/Registro'
const registroElements = new RegistroElements
const url = Cypress.config("baseUrl")

class RegistroPage{
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    //Clica no botão que acessa a página de registro.
    clicarBotaoRegistro(){
        cy.get(registroElements.botaoRegistro()).click();
    }
    //Preencher dados para registro
    dadosRegistro(username, lastname,dia, mes, ano, email, companhia, senha){
        //cy.get(registroElements.botaoGeneroM()).click();
        cy.get(registroElements.botaoGeneroF()).click();
        cy.get(registroElements.caixaNome()).click().type(username);
        cy.get(registroElements.caixaUltimoNome()).click().type(lastname);
        cy.get(registroElements.caixaDia()).click().type(dia);
        cy.get(registroElements.caixaMes()).click().type(mes);
        cy.get(registroElements.caixaAno()).click().type(ano);
        cy.get(registroElements.caixaEmail()).click().type(email);
        cy.get(registroElements.caixaCompanhia()).click().type(companhia);
        cy.get(registroElements.caixaSenha()).click().type(senha);
    }
    //Ele consegue se cadastrar na plataforma
    RegistroOk(){
        cy.get('#register-button').click();
    }
}