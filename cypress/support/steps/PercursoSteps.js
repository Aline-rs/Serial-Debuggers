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
})
And("realiza o registro", () => {
    registroPage.clicarBotaoRegistro();
    registroPage.dadosRegistro("Aline", "Rosa", "8", "February", "1999","teste00743@gmail.com", "Anima","123456");
    registroPage.botaoRegistro();
})
And("vai ate o produto desejado e adiciona ao carrinho", () =>{
    produtosPage.clickCategoria();
    produtosPage.adicionarProdutos();
})
When("realizar o checkout das compras", () =>{
    carrinhoPage.clickBotaoCarrinho();
    carrinhoPage.botaoCheckout();
})
Then("ele deve concluir a compra com sucesso", () =>{

})