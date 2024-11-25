//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    CookTime: String,
    Ingredients: String,
    Description: String,
    Instructions: String
},
{
    collection:"Bio_books"
});
module.exports =mongoose.model('Book',bookModel);
