const router = require('./app.router');
const http = require('http');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://@localhost:27017/technocite', (error) => {
  if(error) throw error;
  console.log('Mongo is now connected to our system please request away.')
});

http.createServer( router ).listen('8001', ( error ) => {
  if(error) throw error;
  console.log('Server is running');
})
