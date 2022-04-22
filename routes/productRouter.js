const express = require('express')
const router = express.Router()

const{
    getSingleProduct,
    getAllProduct
} = require('../controller/productController')

router.route('/').get(getAllProduct)
router.route('/:id').get(getSingleProduct)

module.exports = router