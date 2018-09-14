const Mongoose = require('mongoose');
const Movie = require('./models/movie');
const Http = require('http');
const Router = require('./app.router');

Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://@localhost:27017/technocite', (error) => {
  if(error) throw error;
  console.log('Mongo is now connected to our system please request away.')
});

/**
   * 
   */
  let server = Http.createServer( Router ).listen(8001, ( error ) => {
    if(error) throw error;
    console.log('Server is running');
  });
