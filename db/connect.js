const mongoose = require('mongoose');

const DBConnection = async() => {
    try{
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.wpvb1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log('Connection Pass')
    }
    catch(err){
        console.log(err?.message)
    }
}

module.exports = DBConnection