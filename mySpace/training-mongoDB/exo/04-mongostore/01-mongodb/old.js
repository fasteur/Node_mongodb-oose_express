db=connect('technocite');

var films = db.movies.find({},{}).sort({"fields.year":1}).limit(150);
films.forEach((film) => {
    if(film.fields.year !== undefined){printjson(film.fields.year).limit(1)}
   
});