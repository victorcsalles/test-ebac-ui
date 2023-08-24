/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

import EnderecoPage from "../support/page-objects/endereco.page";


describe('Funcionalidade endereco - Faturamento e entrega ', () => {

      beforeEach(() => {
        
           cy.visit('minha conta/')
           cy.fixture('perfil').then(dados => {
             cy.login(dados.usuario , dados.senha)
           })
           
      });


    it('Deve fazer cadastro  de faturamento com sucesso ', () => {
         
        EnderecoPage.editarEnderecoFaturamento()
    
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        

    });
});