const Book = require('../models/librairie');
const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});


module.exports = (first,last,laDate,rate)=>{
    let livre = new Book({ 
    title: first, 
    author : last,
    date: laDate,
    rating: rate
});
livre.save();
}
