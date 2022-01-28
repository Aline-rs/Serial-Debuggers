import CarrinhoElements from "../elements/CarrinhoElements";

const carrinhoElements = new CarrinhoElements;

class CarrinhoPage{

    clickBotaoCarrinho(){
        cy.get(carrinhoElements.botaoCarrinho).contains('cart').click({force: true});
    }

    botaoCheckout(){
    /*     cy.get(carrinhoElements.botaoTermos).check(); */
        cy.get(carrinhoElements.botaoCheckout).contains('Checkout').click({force: true});

}

}

export default CarrinhoPage;