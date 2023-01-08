/// <reference types="cypress" />

context('Funcionalidade Acesso', () => {   // bloco de função 

    beforeEach(() => {                                                 //Hook com a função de visitar (rodar) a página, banco de dados e afins
        cy.visit('minha-conta')     //A ação será realizada antes de cada caso de teste
    });

    afterEach(() => {   // Limpa o armazenamento de dados no teste. No caso do cypress ele ja possui essa funcionalidade e não é necessário adicioná-la.
        cy.screenshot() // Realiza print do teste após sua finalização
    });



    it('Deve fazer login com sucesso', () => {   // cenário positivo ou caminho feliz
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' ,  'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')

    })
    

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error > li').should('contain', 'não está cadastrado neste site')
   
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

})
