/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.post-2559 > .product-block')
        .contains('Abominable Hoodie')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('.post-2559 > .product-block')
            .contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        var quantidadeProduto = 2
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', quantidadeProduto)
    });
});