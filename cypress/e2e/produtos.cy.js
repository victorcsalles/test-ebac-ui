/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('produtos/')
});

describe('Funcionalidade para adicionar produtos ao carrinho ', () => {

    it('Deve selecionar o prooduto escolhido', () => {
        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()

    });
    it.only('Deve adicionar um produto ao carrinho ', () => {
          var quantidade = 9
        
        cy.get(':nth-child(7) > .page-numbers').click()
        cy.get('[class="product-block grid"]').contains('Supernova Sport Pant').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        /// Validacao de itens 
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Supernova Sport Pant” foram adicionados no seu carrinho.')

    });
});