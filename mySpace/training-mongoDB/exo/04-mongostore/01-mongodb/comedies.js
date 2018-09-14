db=connect('technocite');

var films = db.movies.find({"fields.genres":'Comedy'},{});
films.forEach((film) => {

   printjson(film.fields.title);
});