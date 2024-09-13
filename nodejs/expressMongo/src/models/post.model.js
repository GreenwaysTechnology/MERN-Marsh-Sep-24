const mongoose = require('mongoose')

//define schema 
const schema = mongoose.Schema({
    title: String,
    content: String
})
//create model and export
module.exports = mongoose.model("Post", schema)