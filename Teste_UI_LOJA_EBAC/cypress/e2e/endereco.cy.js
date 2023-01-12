/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    before(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })
        
    });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento()

    });
});