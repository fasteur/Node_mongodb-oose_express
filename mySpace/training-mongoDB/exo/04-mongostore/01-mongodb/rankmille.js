
db=connect('technocite');

var films = db.movies.find({"fields.actors":'Charlize Theron'},{});
films.forEach((film) => {
    printjson(`BEFORE = ${film.fields.rank}`);
    let rankUp = film.fields.rank;
    film.fields.rank= rankUp + 1000
   printjson(`AFTER = ${film.fields.rank}`);
});