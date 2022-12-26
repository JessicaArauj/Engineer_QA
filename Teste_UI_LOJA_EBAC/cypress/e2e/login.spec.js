/// <reference types="cypress" />

context('Funcionalidade Login', () => {   // bloco de função 

    it('Deve fazer login com sucesso', () => {   // cenário positivo ou caminho feliz
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () => {   // cenário positivo ou caminho feliz

    })

})
