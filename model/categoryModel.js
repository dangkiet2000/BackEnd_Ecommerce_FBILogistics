const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_name: String,
    description: String
})

module.exports = mongoose.model('user', categorySchema)