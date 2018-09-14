exports.buildMoviesHTMLListFromQueryResult = (req,res,results) => {

  let template = '';

  results.forEach( (movie) => {
    template += '<li>' + movie.fields.title + '</li>';
  });

  return template;

};