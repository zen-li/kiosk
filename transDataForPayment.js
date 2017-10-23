
const fs = require('fs')

const books = require('./data/book.json')
const magazines = require('./data/magazine.json')
const merchandises = require('./data/merchandise.json')
const comments = require('./data/comments.json')
const bookpromo = require('./data/bookpromo.json')

const data = {
    books: books,
    magazines: magazines,
    merchandises: merchandises,
    comments: comments,
    bookpromo: bookpromo
}

const string = 'var resource = ' + JSON.stringify(data)
fs.writeFileSync('./dist/payment/resource.js', string)
