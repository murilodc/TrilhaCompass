const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

const port = 3000
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Servidor esta aberto na porta ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()