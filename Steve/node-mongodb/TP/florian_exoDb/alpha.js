db=connect('technocite');

var films = db.movies.find({},{}).sort({"fields.title":1}).limit(150);

films.forEach((film) => {

   printjson(film.fields.title);
});