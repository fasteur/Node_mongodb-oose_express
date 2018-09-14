const Student = require('../models/student');
const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});


module.exports = (ID,name)=>{

Student.findByIdAndUpdate(
    ID,
    { $set : { firstname : name} },
    { new : true },
    (error, student) => {
    console.log(`editFirstname =${student}`); // altered document
    console.log(`editFirstname name =${name}`)
    console.log(`editFirstname ID =${ID}`)
    }
    );
}