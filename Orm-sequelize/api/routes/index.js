//routes/index.js

const bodyParser = require('body-parser')

const pessoas = require('./pessoasRoute')
//adicionamos as rotas de niveis e turmas
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

//adicionamos as instâncias de níveis e turmas
//e refatoramos um pouco a função
module.exports = app => {
 app.use(
   bodyParser.json(),
   pessoas,
   niveis,
   turmas
   )
 }