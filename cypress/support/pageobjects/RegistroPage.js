/// <reference types="Cypress" />

import RegistroElements from '../elements/RegistroElements'
const registroElements = new RegistroElements


class RegistroPage{


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
        cy.get(registroElements.caixaDia()).select(dia)
        cy.get(registroElements.caixaMes()).select(mes)
        cy.get(registroElements.caixaAno()).select(ano)
        cy.get(registroElements.caixaEmail()).click().type(email);
        cy.get(registroElements.caixaCompanhia()).click().type(companhia);
        cy.get(registroElements.caixaSenha()).click().type(senha);
        cy.get(registroElements.caixaConfirmSenha()).click().type(senha);
    }
    //Ele consegue se cadastrar na plataforma
    botaoRegistro(){
        cy.get('#register-button').click();
    }
}

export default RegistroPage;