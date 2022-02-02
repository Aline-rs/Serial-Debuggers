import CarrinhoElements from "../elements/CarrinhoElements";

const carrinhoElements = new CarrinhoElements;

class CarrinhoPage{

    clickBotaoCarrinho(){
        cy.get(carrinhoElements.botaoCarrinho).contains('cart').click({force: true});
    }

    conferirCarrinho(){
        cy.get('[type=checkbox]').check({force: true})
        cy.get(carrinhoElements.botaoCheckout).contains('Checkout').click({force: true})
}

}

export default CarrinhoPage;