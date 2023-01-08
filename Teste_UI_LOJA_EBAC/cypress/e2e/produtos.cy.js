/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        //   cy.get('[class="product-block grid"]').first().click() // pode ser desta forma
        //   cy.get('.product-block.grid').first().click() // pode ser desta forma
        cy.get('[class="product-block grid"]')
            // .first() // seleciona o primeiro item da lista
            // .last() // seleciona o último item da lista
            // .eq(3) // método onde inserimos a ordem do item que se deseja (lembrando que começa por 0)
            .contains('Apollo Running Short') // método onde busca-se o item atráves do seu título (é necessário que o título abra a pagina do produto ao clicar)
            .click()
    });
    it.only('Deve adicionar um produto ao carrinho', () => { // o comando it.only faz com que apenas este cenário de teste seja execeutado
        var quantidade = 3  // quantidade é a variável atribuida para o cenário

        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade) // clear limpa o campo antes de executar o próximo método
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade) // should válida se contém duas unidades no carrinho

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});



