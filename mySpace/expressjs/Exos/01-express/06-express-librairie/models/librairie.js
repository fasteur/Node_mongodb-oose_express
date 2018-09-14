const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    title: String,
    author: String,
    date: Number,
    rating : Number
});

module.exports= Mongoose.model('Book',schema);