/// <reference types="cypress" />

const { InternetModule, fa } = require('@faker-js/faker');
const perfil = require('../fixtures/perfil.json')


context('Login feito com sucesso', () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    

    it('deve fazer login com sucesso', () => {
           cy.get('#username').type('aluno_ebac@teste.com')
           cy.get('#password').type('teste@teste.com')
           cy.get('.woocommerce-form > .button').click()
           cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
    })

    
    it.only('Deve fazer login com sucesso - usando fixture ', () => {
        cy.fixture('perfil').then(dados => {
            
            cy.get('#username').type(dados.usuario,{log: false})
            cy.get('#password').type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')

        })

     });



    it('Deve fazer login ok com dados importados ', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
    });

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('aluno_ebac222@teste.com')
        cy.get('#password'). type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })


    it('deve exibir uma mensagem de erro ao inserir senha', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password'). type('teste2222@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });
})