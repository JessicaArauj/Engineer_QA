/// <reference types = "cypress" />

class CadastroPage {
    get #email() { return cy.get("#reg_email") }
    get #password() { return cy.get("#reg_password") }
    get #register() { return cy.get("#customer_login > div:nth-child(2) > form > p:nth-child(4) > input.button") }

    cadastro(email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#register.click()
    }
}

module.exports = new CadastroPage