

const Student = require(`../models/student`);
const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});

module.exports = (ID)=>{
    Student.findOneAndRemove(
    {_id:ID},
    (err,res)=>{
        if(err) throw err; 
    }
    );
}

 