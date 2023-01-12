import { faker } from '@faker-js/faker';

class EnderecoPage {

editarEnderecoFaturamento() {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type(faker.name.firstName())
    cy.get('#billing_last_name').clear().type(faker.name.lastName())
    cy.get('#billing_company').clear().type(faker.company.bs())
    cy.get('#select2-billing_country-container').click().type('Estados Unidos').click() // Pais
    cy.get('#billing_address_1').clear().type(faker.address.city())
    cy.get('#billing_address_2').clear().type(faker.address.buildingNumber())
    cy.get('#billing_city').clear().type(faker.address.cityName())
    cy.get('#select2-billing_state-container').click().type('Califórnia{enter}') // Estado
    cy.get('#billing_postcode').clear().type(faker.address.zipCodeByState())
    cy.get('#billing_phone').clear().type(faker.phone.number('+48 91 ### ## ##'))
    cy.get('#billing_email').clear().type(faker.internet.email())
    cy.get(':nth-child(2) > .button').click()
}

editarEnderecoEntrega() {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click
}

}

export default new EnderecoPage()