db=connect('technocite');

var films = db.movies.remove({"fields.directors":'Harald Zwart'},{});

films.forEach((film) => {
    
   printjson(film.fields.title);
});
