const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'precisa inserir um nome'],
        trim:true, //retorna o texto sem espaços em branco no início e/ou fim da string
        maxlength:[20, 'nome nao pode ter mais de 20 caracteres'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)