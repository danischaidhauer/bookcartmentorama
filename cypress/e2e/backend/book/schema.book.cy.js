import { schemaGetBook, schemaGetBookCategory, schemaGetBookID } from "../../../support/schemas/book"

describe('Validar schemas', () =>{
    it('listar todos os livros', ()=>{
        cy.api({
            method: 'GET',
            url: Cypress.env('url').book
        }).then(schemaGetBook)
        })
        it('listar todas as categorias de livros', ()=>{
            cy.api({
                method: 'GET',
                url: Cypress.env('url').book_category
            }).then(schemaGetBookCategory)
            })
            it('buscar livro por ID', () => {
                const bookID = 34; // Substitua pelo ID desejado
        
                cy.api({
                    method: 'GET',
                    url: `${Cypress.env('url').book}/${bookID}`, // Concatena a URL base do livro com o ID
                }).then(response => {
                    expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 (sucesso)
                    schemaGetBookID(response); // Valida o esquema JSON
                })
            })
    })