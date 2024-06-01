/// <reference types="cypress" />

const { categories} = require('../fixtures/categories.json')
const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Categories', () => {

    beforeEach(() => {
        cy.login(email, senha)

    })

    categories.forEach(category =>{
        it(`Category Validation ${category.name}`, () => {
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories({ timeout: 10000 }).should('contain.text', category.name)
        })
    })

})