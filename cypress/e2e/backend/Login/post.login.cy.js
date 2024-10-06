describe ('login', () =>{
    it('login valido', ()=>{
        cy.api({
            method: 'POST',
            url: Cypress.env('url').login,
            body: {
                username: Cypress.env('user').username,
                password: Cypress.env('user').password
            }, 
            failOnStatusCode: false
        }).then(response =>{
            expect(response.status).to.equal(200)
            expect(response.body.token).to.exist
        })
    })

    it('tentativa de login com dados invalidos', ()=>{
        cy.api({
            method: 'POST',
            url: Cypress.env('url').login,
            body: {
                username: Cypress.env('user').username,
                password: '123'
            }, failOnStatusCode: false
        }).then(response =>{
            expect(response.status).to.equal(401)

        }) 
    })
})