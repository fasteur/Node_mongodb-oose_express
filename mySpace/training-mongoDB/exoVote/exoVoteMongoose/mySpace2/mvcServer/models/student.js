const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    firstname: String,
    lastname: String  
});

module.exports= Mongoose.model('Student',schema);