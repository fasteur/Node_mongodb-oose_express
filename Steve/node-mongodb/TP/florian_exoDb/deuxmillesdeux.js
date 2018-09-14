db=connect('technocite');

var films = db.movies.find({"fields.year":{$in:[2002,2003,2004,2005,2006,2007,2008]}},{});
films.forEach((film) => {

   printjson(film.fields.title);
});