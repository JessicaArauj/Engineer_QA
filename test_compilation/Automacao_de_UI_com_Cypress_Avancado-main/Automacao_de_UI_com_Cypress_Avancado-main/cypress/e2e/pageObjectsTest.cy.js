/// <reference types = 'cypress' />
import {dashboardPage, loginPage} from "../support/pages"
import data from "../fixtures/data.json";


describe('Acess Admin Panel', () => {
    beforeEach(() => {
        cy.visit('/wp-admin')
    });

    it('Shoul Login With Valid Credentials', () => {
        loginPage.login(data.usuario, data.senha, { log: false })
        dashboardPage.siteName.should("be.visible", { timeout: 10000 })
    });

});