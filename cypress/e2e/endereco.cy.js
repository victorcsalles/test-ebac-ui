/// <reference types="cypress" />


describe('Funcionalidade endereco - Faturamento e entrega ', () => {

      beforeEach(() => {
        
           cy.visit('minha conta/')
           cy.login('aluno_ebac@teste.com','teste@teste.com')
      });


    it('Deve fazer cadastro de faturamento com sucesso ', () => {
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        

    });
});