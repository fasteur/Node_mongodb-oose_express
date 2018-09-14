const Express = require('express');
const App = Express();
const Controller = require('./controllers/index')
//IMPORT du module dotenv, et configuration en passant le chemin du fichier .env
require('dotenv').config({path: './variables.env'});
console.log('DB_HOST :',process.env.DB_HOST);

App.get('/', Controller);
App.listen(process.env.PORT, ()=>{
    console.log('App listening on port '+ process.env.PORT);
} )