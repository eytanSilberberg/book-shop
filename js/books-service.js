'use strict'
var STORAGE_KEY = 'booksDB'
const PAGE_SIZE = 5
var gPageIdx = 0
var gBooks = []
var gBooksIfEmpty = ['book of mormon', 'sweet waters']
_createBooks()

// function getBooks() {
//     return gBooks
// }





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
    console.log(param)
    switch (param) {
        case 'alphbetical':
            gBooks.sort((bookA, bookB) => (bookA.title).localeCompare(bookB.title))
            console.log(gBooks)

            break;
        case 'price':

            // gBooks.sort((a, b) => b.price - a.price)
            gBooks.sort((bookA, bookB) => bookB.price - bookA.price)
            console.log(gBooks)


            break;

    }
    _saveBooksToStorage()

}

function setPriceByLang(val) {
    console.log('gBooks', gBooks)
    gBooks = loadFromStorage(STORAGE_KEY)
    var books
    var currency = 'usd'

    var elPrice = document.querySelectorAll('[data-price]')
    elPrice.forEach(el => {
        el.innerText = new Intl.NumberFormat(val, { style: 'currency', currency: currency }).format(el.dataset.price)
    })
}

function nextPage() {
    gPageIdx++
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}
function getBooks() {
    const idxStart = gPageIdx * PAGE_SIZE
    var books = gBooks.slice(idxStart, idxStart + PAGE_SIZE)
    return books;
}