import books from '../../fixtures/books.json'

const book = books[0]

describe('pesquisa', () =>{
    it('pesquisar livro', () =>{
        cy.visit('/')

        cy.get('.mat-mdc-autocomplete-trigger').type(book.title + '{enter}')
        cy.get('app-book-card > .mat-mdc-card > .mat-mdc-card-content')
        .should('contain', book.title)
        .should('contain', book.price)
    })

    it('pesquisar autor', () =>{
        cy.visit('/')

        cy.get('.mat-mdc-autocomplete-trigger').type(book.author + '{enter}')
        cy.get('app-book-card > .mat-mdc-card > .mat-mdc-card-content')
        .should('contain', book.title)
    })
})