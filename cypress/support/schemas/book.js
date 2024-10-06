import Spok from "cy-spok";

export const schemaGetBook = Spok ({
    body: [
        {
            bookId: Spok.number,
            title: Spok.string,
            author: Spok.string,
            category: Spok.string,
            price: Spok.number,
            coverFileName: Spok.string
        }
    ]
})

export const schemaGetBookCategory = Spok ({
    body: [
        {
        categoryId: Spok.number,
        categoryName: Spok.string
        }
    ]
})

export const schemaGetBookID = Spok({
    body: {
        "bookId": Spok.number,
        "title": Spok.string,
        "author": Spok.string,
        "category": Spok.string,
        "price": Spok.number,
        "coverFileName": Spok.string
    }
})
