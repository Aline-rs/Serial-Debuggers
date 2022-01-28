/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")
class HomePage{

    acessarSite() {
        cy.visit(url)
    }
}
export default HomePage;