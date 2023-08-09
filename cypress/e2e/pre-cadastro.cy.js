/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.visit('minha-conta/')
});

describe('Funcionalidade deve fazer pre cadastro com sucesso', () => {
    
    it('Deve fazer pre cadastro com sucesso ', () => {


        let  emailfaker = faker.internet.email()

        let senhafaker = faker.internet.password() 

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type(senhafaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain','Logout')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        

       
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')




    });
});