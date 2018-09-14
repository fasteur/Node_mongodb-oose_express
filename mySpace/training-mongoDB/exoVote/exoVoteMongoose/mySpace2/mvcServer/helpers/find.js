const Student = require('../models/student'); 
const Mongoose = require ('mongoose'); 
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://@localhost:27017/technocite', (error)=>{
    if(error) throw error; 
    console.log('Mongo is now connected to our system please requests away');
});

module.exports = async (ID)=>{
    console.log(`CLG de ID dans find.js = ${ID}`);
    let firstLastName = await Student.findById(
        ID,{},(error,student)=>{
            if(error) throw error; 
            console.log(`CLG de student dans find.js voir callback = ${student}`);
        }
    );
    return firstLastName
}