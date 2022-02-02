/// <reference types="Cypress" />

import HomePageElements from "../elements/HomePageElements";

const url = Cypress.config("baseUrl")
const homePageElements = new HomePageElements

class HomePage{

    acessarSite() {
        cy.visit(url)
    }

    verificaSite() {
        cy.get(homePageElements.homeLogo()).should("be.visible");
    }
}
export default HomePage;