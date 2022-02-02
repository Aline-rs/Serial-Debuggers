/// <reference types="Cypress" />

import CheckoutElements from '../elements/CheckoutElements.js'
const checkoutElements = new CheckoutElements();

class CheckoutPage{


    
    // Preenche os dados de endereço da página de checkout.
    preencherDados (pais,caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) {       
        //Preenche os dados pessoais do cliente
        
        cy.get(checkoutElements.seletorPais()).select(pais);
        cy.get(checkoutElements.seletorEstado()).select("Other");
        cy.get(checkoutElements.caixaCidade()).type(caixaCidadeVar);
        cy.get(checkoutElements.caixaEndereco1()).type(caixaEndereco1Var);
        cy.get(checkoutElements.caixaEndereco2()).type(caixaEndereco2Var);
        cy.get(checkoutElements.caixaCep()).type(caixaCepVar);
        cy.get(checkoutElements.caixaTelefone()).type(caixaTelefoneVar);

        cy.get(checkoutElements.botaoContinueToShipping()).click();
        cy.get(checkoutElements.botaoContinueToPayment()).click();

        cy.get(checkoutElements.radialCreditCard()).click();
        cy.get(checkoutElements.botaoContinueToPaymentInfo()).click();
        cy.get(checkoutElements.seletorTipoCartao()).select(seletorTipoCartaoVar);
        cy.get(checkoutElements.caixaNomeDonoCartao()).type(caixaNomeDonoCartaoVar);
        cy.get(checkoutElements.caixaNumeroCartao()).type(caixaNumeroCartaoVar);
        cy.get(checkoutElements.seletorDataExpiraMes()).select(seletorDataExpiraMesVar);
        cy.get(checkoutElements.seletorDataExpiraAno()).select(seletorDataExpiraAnoVar);
        cy.get(checkoutElements.caixaCvcCartao()).type(caixaCvcCartaoVar);

        cy.get(checkoutElements.botaoContinueToConfirmarCompra()).click();
        cy.get(checkoutElements.botaoConfirmarCompra()).click();
        cy.get(checkoutElements.botaoTerminarCompra()).click();
    }
}
export default CheckoutPage;