db=connect('technocite');

var films = db.movies.find({},{}).sort({"fields.year":-1}).limit(150);
films.forEach((film) => {

   printjson(film.fields.year);
});