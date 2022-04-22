const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    product_id: String,
    user_id: String,
    rating: String,
    created_at : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('comment', commentSchema)