/// <reference types="cypress" />
class LoginPage {
    get #user() { return cy.get("#user_login").should('be.visible'); }
    get #pass() { return cy.get("#user_pass").should('be.visible'); }
    get #login() { return cy.get("#wp-submit"); }

    login(user, pass) {
        cy.wait(1000); // aguarda 1 segundos
        this.#user.type(user, { force: true, log: false, trigger: 'keyup' }).should('have.value', user, { log: false });
        this.#pass.type(pass, { force: true, log: false }).should('have.value', pass, { log: false });
        cy.wait(1000); // aguarda 1 segundos
        this.#login.click();
    }
}

module.exports = new LoginPage()