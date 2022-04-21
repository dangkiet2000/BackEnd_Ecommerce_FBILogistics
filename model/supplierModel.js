const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    supplier_name: String,
    description: String
})

module.exports = mongoose.model('user', supplierSchema)