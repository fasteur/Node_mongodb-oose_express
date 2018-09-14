const Book = require('../models/librairie'); 
const Mongoose = require ('mongoose'); 
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://@localhost:27017/technocite', (error)=>{
    if(error) throw error; 
    console.log('Mongo is now connected to our system please requests away');
});

module.exports = async (ID)=>{
    console.log(`CLG de ID dans find.js = ${ID}`);
    let firstLastTitle = await Book.findById(
        ID,{},(error,book)=>{
            if(error) throw error; 
            console.log(`CLG de book dans find.js voir callback = ${book}`);
        }
    );
    return firstLastTitle
}