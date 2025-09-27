/// <reference types = "cypress" />

const cadastroPage = require('../support/pages/cadastro.page')
const dashboardPage = require('../support/pages/dashboard.page')
const { faker } = require('@faker-js/faker')

describe('Realizar novo cadastro', () => {

    const email = faker.internet.email();
    const password = faker.internet.password();

    beforeEach(() => {
    cy.visit('minha-conta')
    });

    it('Novo cadastro', () => {
        cadastroPage.cadastro(email, password)
        cy.wait(2000);     
        // dashboardPage.minhaPage.should("be.visible")
        cy.get('.woocommerce-MyAccount-navigation').should('be.visible')
        
    });

});