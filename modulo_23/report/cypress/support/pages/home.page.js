/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
    openSearchProduct(){
        cy.get('[data-testid="search-products"]').click({force: true})
    },
    searchProduct(product){
        cy.get('[data-testid="searchInput"]').type(product)
    },
    products(){
        return cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]', { timeout: 20000 })
    },
    openCategoriesFilter(){
        cy.get('[data-testid="Category"]').click()
    },
    categories(){
        return cy.get('[data-testid^="search-category-"]')
    }
}