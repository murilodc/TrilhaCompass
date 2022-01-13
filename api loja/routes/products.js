const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getAllProductsStatic,
} = require('../controllers/products')

router.route('/api/v1/products').get(getAllProducts)
router.route('/api/v1/products/static').get(getAllProductsStatic)

module.exports = router