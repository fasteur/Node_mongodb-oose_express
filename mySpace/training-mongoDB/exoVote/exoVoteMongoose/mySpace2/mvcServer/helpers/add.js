const Student = require('../models/student');
const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});


module.exports = (first,last)=>{
    let student = new Student({ 
    firstname : first, 
    lastname : last});
student.save();
}
