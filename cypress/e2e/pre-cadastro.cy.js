/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


beforeEach(() => {
    cy.visit('minha-conta/')
});

describe('Funcionalidade deve fazer pre cadastro com sucesso', () => {
    
    it('Deve fazer pre cadastro com sucesso ', () => {
    

        var login = faker.internet.email()
        var senha = faker.internet.password() 
        var senha2 = faker.internet.password() 

        cy.get('#reg_email').type(login)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain','Logout')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('#password_current').type(senha)
        cy.get('#password_1').type(senha2)
        cy.get('#password_2').type(senha2)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')



    });

      it('deve fazer precadastro com sucesso com o faker e comands ', () => {
        var nome = faker.name.firstName()
        var sobrenome = faker.name.lastName()
        var login = faker.internet.email()
        var senha = faker.internet.password() 
        var sena = faker.internet.password(20)
        
        
        cy.preCadastro(login, senha, nome, sobrenome,sena )

        
      });
});