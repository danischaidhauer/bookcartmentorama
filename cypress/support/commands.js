Cypress.Commands.add('login', (username, password) => {
    let authToken
    let userId

    cy.api({
        method: 'POST',
        url: Cypress.env('url').login,
        body: {
            username: username,
            password: password
        }, 
        failOnStatusCode: false
    }).then(response =>{
        authToken = response.body.token
        userId = response.body.userDetails.userId
    })

    cy.window().then(win => {
       win.localStorage.setItem('authToken', authToken) 
       win.localStorage.setItem('userId', userId) 
    })
})