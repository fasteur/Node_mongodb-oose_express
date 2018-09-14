db=connect('technocite');

var films = db.movies.find({},{}).limit(10);
films.forEach((films) => {

    printjson(films);
});

