db=connect('technocite');

var films = db.movies.find({"fields.actors":'Sharlto Copley'},{});
films.forEach((film) => {

   printjson(film.fields.title);
});
