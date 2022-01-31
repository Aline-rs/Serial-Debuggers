/// <reference types="Cypress" />
import HomeElements from "../elements/HomeElements";

const url = Cypress.config("baseUrl")
const homeElements = new HomeElements;

class HomePage{

    acessarSite() {
        cy.visit(url)
    }

    validacaoHome(){
        cy.get(homeElements.validacaoSite()).should('be.visible')
    }

}
export default HomePage;