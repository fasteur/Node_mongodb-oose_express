db=connect('technocite');

var films = db.movies.find({"fields.directors":{$in:["Neil Burger","Brad Furman"]}},{});
films.forEach((film) => {

   printjson(film.fields.title);
});