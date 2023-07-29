/// <reference types="cypress" />

context('Login feito com sucesso', () =>{

    it('deve fazer login com sucesso', () => {
           cy.visit('minha-conta/')
           cy.get('#username').type('aluno_ebac@teste.com')
           cy.get('#password'). type('teste@teste.com')
           cy.get('.woocommerce-form > .button').click()
           cy.get('a > .hidden-xs').should('contain', 'Welcome Aluno')
    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.visit('minha-conta/')
        cy.get('#username').type('aluno_ebac222@teste.com')
        cy.get('#password'). type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })


    it('deve exibir uma mensagem de erro ao inserir senha', () => {
        cy.visit('minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password'). type('teste2222@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });
})