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
   
   it.only('Não pode adicionar dois itens do mesmo produto', () => {

      cy.visit('product/produto-teste-11')
      cy.AddItem()
      cy.visit('product/produto-teste-11')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-error > li').should('contain', 'Você não pode adicionar outro "Produto Teste" em seu carrinho.')
  
   });
});