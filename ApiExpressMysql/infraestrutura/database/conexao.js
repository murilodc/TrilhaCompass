const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Fgtfaskw@1203',
    database: 'agenda-petshop'
})

module.exports = conexao