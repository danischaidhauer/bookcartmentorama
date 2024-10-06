describe ('carrinho', () =>{
    beforeEach( ()=>{
        cy.login(Cypress.env('user').username, Cypress.env('user').password)
    })
    
    it ('adicionar e remover itens no carrinho', () =>{
        cy.visit('/');
        cy.contains('Add to Cart').click();
        cy.get(':nth-child(2) > .mat-mdc-button-touch-target').click();

        cy.get('.my-3').should('contain', 'Harry Potter and the Chamber of Secrets', 'Title');
        cy.get('.my-3').should('contain', 'Price');
        cy.get('.mat-elevation-z4 > .mdc-button__label').click();

        cy.get('.container').should('contain', 'Your shopping cart is empty.');
    })
})