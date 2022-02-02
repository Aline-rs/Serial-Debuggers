/// <reference types="Cypress" />

<<<<<<< HEAD
<<<<<<< HEAD
import CheckoutElements from '../elements/CheckoutElements'
const checkoutElements = new CheckoutElements

class CheckoutPage{    
    // Preenche os dados de endereço da página de checkout.
    preencherDados (pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) {       
        //Preenche os dados pessoais do cliente
        cy.get(checkoutElements.seletorPais()).select(pais);
        cy.get(checkoutElements.seletorEstado()).select(seletorEstadoVar);
=======
=======
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
import CheckoutElements from '../elements/CheckoutElements.js'
const checkoutElements = new CheckoutElements();

class CheckoutPage{


    
    // Preenche os dados de endereço da página de checkout.
<<<<<<< HEAD
    preencherDados (pais,caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) {       
        //Preenche os dados pessoais do cliente
        
        cy.get(checkoutElements.seletorPais()).select(pais);
        cy.get(checkoutElements.seletorEstado()).select("Other");
>>>>>>> origin/aline-rs
=======
    preencherDados (pais, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) {       
        //Preenche os dados pessoais do cliente
        /*cy.get(checkoutElements.seletorPais()).select(pais).then(function($select){
            $select.val('volvo')
          })*/
        //cy.get(checkoutElements.seletorPais()).contains("select",pais) cy.get('select').eq(0).select('1'); 
        cy.get(checkoutElements.seletorPais()).click().select(pais);
        cy.get(checkoutElements.seletorEstado()).select("Other");
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
        cy.get(checkoutElements.caixaCidade()).type(caixaCidadeVar);
        cy.get(checkoutElements.caixaEndereco1()).type(caixaEndereco1Var);
        cy.get(checkoutElements.caixaEndereco2()).type(caixaEndereco2Var);
        cy.get(checkoutElements.caixaCep()).type(caixaCepVar);
        cy.get(checkoutElements.caixaTelefone()).type(caixaTelefoneVar);
<<<<<<< HEAD
<<<<<<< HEAD
        //Clica nos botões de continuar para seleção de pagamento
        cy.get(checkoutElements.botaoContinueToShipping()).click();
        cy.get(checkoutElements.botaoContinueToPayment()).click();
        //Seleciona os parametros de pagamento
=======
=======
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272

        cy.get(checkoutElements.botaoContinueToShipping()).click();
        cy.get(checkoutElements.botaoContinueToPayment()).click();

<<<<<<< HEAD
>>>>>>> origin/aline-rs
=======
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
        cy.get(checkoutElements.radialCreditCard()).click();
        cy.get(checkoutElements.botaoContinueToPaymentInfo()).click();
        cy.get(checkoutElements.seletorTipoCartao()).select(seletorTipoCartaoVar);
        cy.get(checkoutElements.caixaNomeDonoCartao()).type(caixaNomeDonoCartaoVar);
        cy.get(checkoutElements.caixaNumeroCartao()).type(caixaNumeroCartaoVar);
        cy.get(checkoutElements.seletorDataExpiraMes()).select(seletorDataExpiraMesVar);
        cy.get(checkoutElements.seletorDataExpiraAno()).select(seletorDataExpiraAnoVar);
        cy.get(checkoutElements.caixaCvcCartao()).type(caixaCvcCartaoVar);
<<<<<<< HEAD
<<<<<<< HEAD
        //efetua a finalização de todo processo de compra retornando ao inicio do site
=======

>>>>>>> origin/aline-rs
=======

>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
        cy.get(checkoutElements.botaoContinueToConfirmarCompra()).click();
        cy.get(checkoutElements.botaoConfirmarCompra()).click();
        cy.get(checkoutElements.botaoTerminarCompra()).click();
    }
<<<<<<< HEAD
<<<<<<< HEAD



    preencheDadosPessoais(pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar){
        //Preenche os dados pessoais do cliente
        cy.get(checkoutElements.seletorPais()).select(pais);
        cy.get(checkoutElements.seletorEstado()).select(seletorEstadoVar);
        cy.get(checkoutElements.caixaCidade()).type(caixaCidadeVar);
        cy.get(checkoutElements.caixaEndereco1()).type(caixaEndereco1Var);
        cy.get(checkoutElements.caixaEndereco2()).type(caixaEndereco2Var);
        cy.get(checkoutElements.caixaCep()).type(caixaCepVar);
        cy.get(checkoutElements.caixaTelefone()).type(caixaTelefoneVar);
    }

    botaoAvancar(){
        //Clica nos botões de continuar para seleção de pagamento
        cy.wait(3000)
        cy.get(checkoutElements.botaoContinueToShipping()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoContinueToPayment()).click({force:true});
    }

    preencheDadosCartao(seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar){
        //Seleciona os parametros de pagamento
        cy.get(checkoutElements.radialCreditCard()).click();
        cy.get(checkoutElements.botaoContinueToPaymentInfo()).click();
        cy.get(checkoutElements.seletorTipoCartao()).select(seletorTipoCartaoVar);
        cy.get(checkoutElements.caixaNomeDonoCartao()).type(caixaNomeDonoCartaoVar);
        cy.get(checkoutElements.caixaNumeroCartao()).type(caixaNumeroCartaoVar);
        cy.get(checkoutElements.seletorDataExpiraMes()).select(seletorDataExpiraMesVar);
        cy.get(checkoutElements.seletorDataExpiraAno()).select(seletorDataExpiraAnoVar);
        cy.get(checkoutElements.caixaCvcCartao()).type(caixaCvcCartaoVar);
    }
    botaoFinalizacao(){
        //efetua a finalização de todo processo de compra retornando ao inicio do site
        cy.get(checkoutElements.botaoContinueToConfirmarCompra()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoConfirmarCompra()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoTerminarCompra()).click({force:true});
    }
}

=======
}
>>>>>>> origin/aline-rs
=======
}
>>>>>>> ea174d4da39e2beeac1b00bf574a375bb3ee2272
export default CheckoutPage;