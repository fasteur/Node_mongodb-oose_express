const Movie = require(`${process.cwd()}/models/movie`);
const Fs = require('fs');
const Util = require('util');
const Read = Util.promisify(Fs.readFile);
const Helpers = require(`${process.cwd()}/helpers/`);

module.exports = async (req, res) => {

  console.log('In controller');

  Read(`${process.cwd()}/views/index.html`, { encoding : 'UTF-8'} )
    
    .then( async (result) => {

      // Request 1
      let response_1 = await Movie.find(
        {}, 
        { 'fields.title' : 1 }, 
      )
      .sort({ 'fields.title' : -1 })
      .limit(10);

      console.log(response_1);

      // --- Request 2

      let response_2 = await Movie.find(
        {},
        { 'fields.title' : 1 }, 
      )
      .sort({ 'fields.title' : 1 })
      .limit(10);

      console.log(response_2);

      // --- Request 3

      let response_3 = await Movie.find(
        {},
        { 'fields.title' : 1 }, 
      )
      .sort({ 'fields.rank' : 1 })
      .limit(10);

      console.log(response_3);

      // --- Request 4

      let response_4 = await Movie.find(
        { 'fields.actors' : { $in : ['Sharlto Copley'] } },
        { 'fields.title' : 1 }, 
      )
      .sort({ 'fields.title' : 1 })
      .limit(10);

      console.log(response_4);

      let output = result
        .replace(/{{REQUEST_1}}/g, Helpers.buildMoviesHTMLListFromQueryResult(req,res,response_1))
        .replace(/{{REQUEST_2}}/g, Helpers.buildMoviesHTMLListFromQueryResult(req,res,response_2))
        .replace(/{{REQUEST_3}}/g, Helpers.buildMoviesHTMLListFromQueryResult(req,res,response_3))
        .replace(/{{REQUEST_4}}/g, Helpers.buildMoviesHTMLListFromQueryResult(req,res,response_4));

      res.writeHead(200, {'Content-type' : 'text/html'});
      res.end(output);
    });

   
};