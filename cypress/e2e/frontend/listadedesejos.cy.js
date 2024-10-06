describe ('carrinho', () =>{
    beforeEach( ()=>{
        cy.login(Cypress.env('user').username, Cypress.env('user').password)
    })
    
    it ('adicionar e remover da lista de desejos', () =>{
        cy.visit('/');
        cy.wait(5000);
        cy.get(':nth-child(1) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > .favourite').click();
        cy.wait(10000);
        cy.get('.mdc-icon-button.ng-star-inserted > .mat-mdc-button-touch-target').click()
        cy.get('.mat-mdc-card-content').should('contain', 'Title', 'Price');
        cy.get('app-addtowishlist > .mdc-button > .mdc-button__label').click();
        cy.get('.my-4 > .mat-mdc-card > .mat-mdc-card-header').should('contain', 'Your wishlist is empty.');
    })
})