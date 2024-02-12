/// <reference types="cypress" />

// const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {   // posso utilizar context no lugar de describe

    // beforeEach(() => { // bloco de função 
    //     cy.visit('minha-conta/')
    // });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Deve fazer login com sucesso', () => {   // cenário positivo ou caminho feliz
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' ,  'Minha conta') // validação do resultado esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)') // validação do resultado esperado

    })

})