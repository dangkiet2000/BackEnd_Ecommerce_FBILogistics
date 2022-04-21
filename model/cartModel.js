const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    used_id: String
})

module.exports = mongoose.model('user', userSchema)