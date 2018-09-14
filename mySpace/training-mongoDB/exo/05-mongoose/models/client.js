const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    firstname: String,
    lastname: String,
    address: String,
    date: { type : Date, default: Date.now}, 
    vat : String,
    company: String,
    sectors: [String]
});

module.exports= Mongoose.model('Client',schema);