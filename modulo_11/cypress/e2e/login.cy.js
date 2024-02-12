/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {   // posso utilizar describe no lugar de context

    beforeEach(() => { // bloco de função 
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {   // cenário positivo ou caminho feliz
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' ,  'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'aluno_ebac')

    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' ,  'Minha conta')
    });
    
    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario, {log: false})
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' ,  'Minha conta')
    })
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {  
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => { 
        cy.visit('minha-conta')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

})
