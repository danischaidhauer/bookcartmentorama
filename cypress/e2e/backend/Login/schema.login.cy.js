import { schemaPostLogin } from "../../../support/schemas/login"

describe ('validacao schemas', () =>{
    it('login valido', ()=>{
        cy.api({
            method: 'POST',
            url: Cypress.env('url').login,
            body: {
                username: Cypress.env('user').username,
                password: Cypress.env('user').password
            }, 
            failOnStatusCode: false
        }).then(schemaPostLogin)
    })

})