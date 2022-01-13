const Product = require('../models/product')
const getAllProductsStatic = async (req,res) => {
    const Products = await Product.find()
    res.status(200).json({msg:'Rota de teste'})
}

const getAllProducts = async (req,res) => {
    const {featured, company, name, sort} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }
    let result = Product.find(queryObject)
    if(sort){
        const sortList = sort.spli(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('createAt')
    }
    if(fields){
        const fieldsList = sort.spli(',').join(' ')
        result = result.select(fieldsList)   
    }
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}