const Express = require('express');
const App = Express();
const Router = require('./app.router.js')
const Mongoose = require('mongoose');
const Parser = require('body-parser')

// --------- Connexion
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});
App.use(Parser.json())
App.use(Parser.urlencoded({extended:true}));
App.use('/',Router);

App.listen(8001, ()=>{
    console.log('App listening on port 8001');
} )