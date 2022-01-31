/* /* /* global Given, Then, When */

import RegistroPage from '../pageobjects/RegistroPage'
import HomePage from '../pageobjects/HomePage'
import ProdutosPage from '../pageobjects/ProdutosPage'
import CarrinhoPage from '../pageobjects/CarrinhoPage'

const homePage = new HomePage
const registroPage = new RegistroPage
const produtosPage = new ProdutosPage
const carrinhoPage = new CarrinhoPage

Given("que o usuario acessa o site", () => {
    homePage.acessarSite();
    homePage.validacaoHome();
})
And("realiza o registro {} {} {} {} {} {} {} {}", (username, lastname, dia, mes, ano, email, companhia, senha) => {
    registroPage.clicarBotaoRegistro();
    registroPage.validacaoPagRegistro();
    registroPage.dadosRegistro(username, lastname, dia, mes, ano, email, companhia, senha);
    registroPage.concluirRegistro();
})
And("vai ate o produto desejado e adiciona ao carrinho", () =>{
    produtosPage.clickCategoria();
    produtosPage.adicionarProdutos();
})
When("realizar o checkout das compras", () =>{
    carrinhoPage.clickBotaoCarrinho();
    cy.get('h1').should("contain", "Shopping")
    carrinhoPage.conferirCarrinho();
})
Then("ele deve concluir a compra com sucesso", () =>{

})