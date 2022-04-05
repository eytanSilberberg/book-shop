


'use strict'
function init() {
    renderBooks()
}


function renderBooks() {
    const books = getBooks()
    var elTbody = document.querySelector('tbody')
    var strHTML = books.map(book => `
    <tr>
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td><button class="btn-table btn-read"  onclick="onRead('${book.id}')">read</button></td>
    <td><button class="btn-table btn-update"  onclick="onUpdate('${book.id}')">update</button></td>
    <td><button class="btn-table btn-delete"  onclick="onDelete('${book.id}')">delete</button></td>
</tr>`)
    elTbody.innerHTML = strHTML.join('')
    console.log('i am here')
}


function renderModal(book) {
    var strHTML = ''

    var elModal = document.querySelector('.modal')
    var elBtnWrapper = elModal.querySelector('.rate-container')
    strHTML +=
        `<button class="btn-rate" onclick="onChangeRateValue('${book.id}',-1)">-</button>
    <span class="rate-value">${book.rate}</span>
    <button class="btn-rate" onclick="onChangeRateValue('${book.id}',1)">+</button>`
    elBtnWrapper.innerHTML = strHTML
    elModal.querySelector('h1').innerText = `${book.title}`
    elModal.querySelector('p').innerText = `Book decription:  ${book.desc}`
    elModal.querySelector('h2').innerText = `price :${book.price}$`
    elModal.classList.add('open')
}
function renderRateValue(id) {

    var elRate = document.querySelector('.rate-value')
    var book = getBookById(id)
    elRate.innerHTML = book.rate
}


function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function onAddBook() {
    var bookName = prompt('what is the name of the book?')
    var bookPrice = +prompt('what is the price of the book')
    addBook(bookName, bookPrice)
    renderBooks()
}

function onDelete(bookId) {

    deleteBook(bookId)
    renderBooks()
}

function onUpdate(id) {
    var price = +prompt('what is the new price?')
    UpdateBook(id, price)
    renderBooks()
}

function onRead(id) {
    var requestedBook = readBook(id)
    renderModal(requestedBook)


}


function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.classList.remove('open')
}


function onChangeRateValue(id, diff) {
    changeRateValue(id, diff)
    renderRateValue(id)
}

function onSortBy(parameter) {
    console.log(parameter)
    sortBy(parameter)
    renderBooks()
}

