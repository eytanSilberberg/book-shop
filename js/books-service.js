'use strict'
var STORAGE_KEY = 'booksDB'

var gBooks = []
var gBooksIfEmpty = ['book of mormon', 'sweet waters']
_createBooks()

function getBooks() {
    return gBooks
}





function _createBook(name, price) {

    return {
        id: makeId(),
        title: name,
        price: price,
        desc: makeLorem(),
        rate: 0
    }


}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = []
        books = []
        books.push(_createBook('Harry Potter', 55))
        books.push(_createBook('Melech Hafalafel', 25))

    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function addBook(name, price) {
    var book = _createBook(name, price)
    gBooks.unshift(book)
    _saveBooksToStorage()
}

function deleteBook(id) {
    var requestedBookIdx = gBooks.findIndex(book => book.id === id)
    gBooks.splice(requestedBookIdx, 1)
    _saveBooksToStorage()
}

function UpdateBook(id, price) {
    var requestedBook = gBooks.find(book => book.id === id)
    requestedBook.price = price
    _saveBooksToStorage()

}

function readBook(id) {
    var requestedBook = gBooks.find(book => book.id === id)
    return requestedBook
}

function changeRateValue(id, diff) {
    var book = getBookById(id)
    if ((book.rate + diff > 10) || (book.rate + diff < 0)) return
    book.rate += diff
    _saveBooksToStorage()
}


function getBookById(id) {
    var book = gBooks.find(book => book.id === id)
    return book
}

function sortBy(param) {
    switch (param) {
        case 'alphbetical':
            gBooks.sort((bookA, bookB) => (bookA.title).localeCompare(bookB.title))
            console.log(param)
            break;
        case 'price':

            // gBooks.sort((a, b) => b.price - a.price)
            gBooks.sort((bookA, bookB) => bookB.price - bookA.price)
            console.log(param)

            break;

    }
    _saveBooksToStorage()
    console.log(gBooks)
}

function setPriceByLang(val) {
    gBooks = loadFromStorage(STORAGE_KEY)
    console.log('gBooks', gBooks);
    var books
    // debugger
    switch (val) {

        case 'he':
            var opt = { style: 'currency', currency: 'Ils' }
            books = gBooks.map(book => {
                book.price = new Intl.NumberFormat(val, opt).format(book.price)
                return book
            })
            break;
        case 'en-us':
            // debugger
            var opt = { style: 'currency', currency: 'Usd' }
            books = gBooks.map(book => {
                book.price = new Intl.NumberFormat(val, opt).format(book.price)
                return book
            })
            break;


    }
    gBooks = books

    console.log(gBooks)
    // _saveBooksToStorage()
}