
const fs = require('fs')
const data = require('./data')

const string = 'var resource = ' + JSON.stringify(data)
fs.writeFileSync('./dist/payment/resource.js', string)

