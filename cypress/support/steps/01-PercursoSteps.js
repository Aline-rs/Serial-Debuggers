/* /* /* global Given, Then, When */

import RegistroPage from '../pageobjects/RegistroPage'
import HomePage from '../pageobjects/HomePage'
import ProdutosPage from '../pageobjects/ProdutosPage'
import CarrinhoPage from '../pageobjects/CarrinhoPage'
import CheckoutPage from '../pageobjects/CheckoutPage'
<<<<<<< HEAD:cypress/support/steps/01-PercursoSteps.js
import LoginPage from '../pageobjects/LoginPage'
=======
>>>>>>> origin/aline-rs:cypress/support/steps/PercursoSteps.js

const homePage = new HomePage
const registroPage = new RegistroPage
const produtosPage = new ProdutosPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage
<<<<<<< HEAD:cypress/support/steps/01-PercursoSteps.js
const loginPage = new LoginPage
=======
>>>>>>> origin/aline-rs:cypress/support/steps/PercursoSteps.js

Given("que o usuario acessa o site", () => {
    homePage.acessarSite();
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
<<<<<<< HEAD:cypress/support/steps/01-PercursoSteps.js
    carrinhoPage.conferirCarrinho();
})
Then("ele então deve concluir a compra com sucesso {} {} {} {} {} {} {} {} {} {} {} {} {}", (pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) => {
    checkoutPage.preencherDados(pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar);
=======
    carrinhoPage.validarCarrinho();
    carrinhoPage.conferirCarrinho();
})
Then("ele deve concluir a compra com sucesso {} {} {} {} {} {} {} {} {} {} {} {}", (pais, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) => {
    checkoutPage.preencherDados(pais, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar);
>>>>>>> origin/aline-rs:cypress/support/steps/PercursoSteps.js

})

And("deslogar da plataforma", () =>{
    loginPage.clicarBotaoLogout();
    loginPage.verificaBotaoLogin();
})