/* eslint-disable */
const fs = require('fs')

const books = require('./data/book.json')
const magazines = require('./data/magazine.json')
const merchandises = require('./data/merchandise.json')

const data = {
    books: books,
    magazines: magazines,
    merchandises: merchandises
}

const string = 'var resource = ' + JSON.stringify(data)
fs.writeFileSync('./dist/payment/resource.js', string)
