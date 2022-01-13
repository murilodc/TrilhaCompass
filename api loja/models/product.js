const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'nome do produto precisa ser fornecido']
    },
    price:{
        type:Number,
        required:[true, 'preco precisa ser fornecido']
    },
    featured: {
    type:Boolean,
    default:false,
    },
    rating: {
        type:Number,
        default:4.5,
    },
    company: {
    type: String,
    enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported',
    },
}
})

module.exports = mongoose.model('Product', productSchema)