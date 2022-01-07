const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json([{name:'murilo'}, {name:'susan'}])
})

app.listen(5000, () => {
    console.log('Servidor aberto na porta 5000')
})