const Http = require('http')
const Router = require('./app.router')
const Mongoose = require('mongoose');
const Movie = require('./models/movie');
Mongoose.Promise = global.Promise;

Http.createServer(Router ).listen(8001, (err)=>{
    if(err) console.log(err);
    console.log("Server is running on port 8001")
})




// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});