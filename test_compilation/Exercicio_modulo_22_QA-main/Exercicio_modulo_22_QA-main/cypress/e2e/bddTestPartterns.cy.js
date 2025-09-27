/// <reference types = "cypress" />

const cadastroPage = require('../support/pages/cadastro.page')
// const dashboardPage = require('../support/pages/dashboard.page')
const { faker } = require('@faker-js/faker')

describe('Realizar novo cadastro', () => {

    const email = faker.internet.email();
    const password = faker.internet.password();

    context('Given I visit EBAC Store', () => {
        before(() => {
            cy.visit('minha-conta')
        });

        context(`When I register new email ${email} and pass ${password}`, () => {
            beforeEach(() => {
                cadastroPage.cadastro(email, password);
            });

            it('Then the user dashboard page should be visible', () => {
                cy.get('.woocommerce-MyAccount-navigation').should('be.visible');
              });
              
        });
    });
});
