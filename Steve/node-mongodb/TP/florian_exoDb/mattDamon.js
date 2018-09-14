db=connect('technocite');

var films = db.movies.find(
    {$and : [{"fields.actors":"Jennifer Lawrence"},{"fields.actors":"Matt Damon"}]},{});
films.forEach((film) => {

   printjson(film.fields.actors);
});