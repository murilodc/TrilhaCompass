const bodyParser = require('body-parser')
const notas = require('./notasRoute')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(notas)
}