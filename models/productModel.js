const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,    
    description: String,
    discount: Number,
    price: Number,
    quantity: Number,
    warranty: Number,
    rating: Number,
    rate_count: Number,
    like_count: Number,
    image: Number,
    category: String,
    brand: String,
    supplier: String
})

module.exports = mongoose.model('product', productSchema)