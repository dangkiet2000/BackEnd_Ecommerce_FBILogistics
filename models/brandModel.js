const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    brand_name: String,
    description: String
})

module.exports = mongoose.model('brand', brandSchema)