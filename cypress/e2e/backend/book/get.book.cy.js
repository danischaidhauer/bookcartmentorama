describe('Book', () =>{
    it('listar todos os livros', ()=>{
        cy.api({
            method: 'GET',
            url: Cypress.env('url').book
        }).then(response =>{
            expect(response.status).to.equal(200)
        })
    })

    it('listar todas as categorias de livros', ()=>{
        cy.api({
            method: 'GET',
            url: Cypress.env('url').book_category
        }).then(response =>{
            expect(response.status).to.equal(200)
        })
    })

    it('procurar por um livro especifico', ()=>{
        cy.api({
            method: 'GET',
            url: Cypress.env('url').book_id
        }).then(response =>{
            expect(response.status).to.equal(200)
        })
    })

    
})