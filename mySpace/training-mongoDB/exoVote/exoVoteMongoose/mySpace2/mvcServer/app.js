const Http = require('http')
const Router = require('./app.router')
const Mongoose = require('mongoose');


// --------- Connexion
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});
//--------createServer
Http.createServer(Router ).listen(8001, (err)=>{
    if(err) console.log(err);
    console.log("Server is running on port 8001")
})



