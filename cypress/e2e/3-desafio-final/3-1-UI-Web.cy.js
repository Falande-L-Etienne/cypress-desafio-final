///<reference types="cypress"/>

describe('Funcionalidade: Adicionar itens', () => {

   it('adicionar itens no carrinho', () => {

        cy.visit('product/produto-teste-11')
        cy.AddItem()
        cy.visit('product/produto-teste-9')
        cy.AddItem()
        cy.visit('product/produto-teste-8')
        cy.AddItem()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
    
   }); 
});