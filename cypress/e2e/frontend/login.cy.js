describe('login', () =>{
    it ('login com informaçoes de usuario validas', () => {
        cy.visit('/login')

        cy.get('.mat-mdc-form-field.ng-tns-c1534922977-1 > .mat-mdc-text-field-wrapper')
        .type(Cypress.env('user').username)

        cy.get('.mat-mdc-form-field-has-icon-suffix > .mat-mdc-text-field-wrapper')
        .type(Cypress.env('user').password, { log: false})

        cy.get('button').last().click();

        cy.get('app-nav-bar').should('contain', Cypress.env('user').username)
    } )
})