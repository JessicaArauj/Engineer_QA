/// <reference types="cypress" />

const dashboardPage = require('../support/pages/checkoutDashboard.page')
const data = require('../fixtures/data.json')


describe('Checkout', () => {
    beforeEach(() => {
      
    });
    it('login', () => {   
              
        cy.login(data.email, data.senha)   
        
    });

    it('chekout', () => {       
        cy.checkout()
        // checkoutDashboard.contaPage.should('be.visible')
        cy.get('.page-title').should('be.visible')
       
        
    });
});