

db = connect('technocite');
//1

//afficher liste:
//var films = db.movies.find({},{}).limit(10);
//films.forEach((films)=> {
//    printjson(films);
//});
//---------------------------------------------------------------------

//afficher année de sortie de la plus récente à la plus ancienne

//var films = db.movies.find({},{}).sort({"fields.year":-1});
//films.forEach((film) => {
//    printjson(film.fields.year);
//});
//---------------------------------------------------------------------

// Titre dans l'ordre alphabétique
//var films = db.movies.find({},{}).sort({"fields.title":1});
//films.forEach((film) => {
//    printjson(film.fields.title);
//});

//--------------------------------------------------------------------

//Rank du plus élevé au plus faible

//var films = db.movies.find({},{}).sort({"fields.rank":-1});
//films.forEach((film) => {
//    printjson(film.fields.rank);
//});

//--------------------------------------------------------------------

//Filtrer les films pour ne récupérer que celui/ceux Dans lesquels a joué Sharlto Copley

//var films = db.movies.find({"fields.actors":"Sharlto Copley"},{});
//films.forEach((film) => {
//   printjson(film.fields.title);
//});

//--------------------------------------------------------------------

//Filtrer les films pour ne récupérer que celui/ceux Qui sont des comédies

//var films = db.movies.find({"fields.genres":"Comedy"},{});
//films.forEach((film) => {
//   printjson(film.fields.title);
//});

//-------------------------------------------------------------------

////Filtrer les films pour ne récupérer que celui/ceux sortis entre 2002 et 2008

//var films = db.movies.find({"fields.year":{$in:[2002,2003,2004,2005,2006,2007,2008]}},{});
//films.forEach((film) => {

//  printjson(film.fields.title);
//});

//-------------------------------------------------------------------

//Filtrer les films pour ne récupérer que celui/ceux dans lesquels ont joué conjointement Jennifer Lawrence et Matt Damon

//var acteurs = db.movies.find({"fields.actors": {$all:["Jennifer Lawrence", "Matt Damon"]}},{})
//acteurs.forEach( (movie) => {
// printjson(movie)})
//-------------------------------------------------------------------

//Filtrer les films pour ne récupérer que celui/ceux dans lesquels ont joué conjointement Jodie Foster et Sharlto Copley

//var acteurs = db.movies.find({"fields.actors": {$all:["Jodie Foster", "Sharlto Copley"]}},{})
//acteurs.forEach( (movie) => {
//printjson(movie)})

//-------------------------------------------------------------------

//Filtrer les films pour ne récupérer que celui/ceux réalisés par Neil Burger ou Brad Furman

//var realisateurs = db.movies.find({"fields.directors": {$in:["Neil Burger", "Brad Furman"]}},{})
//realisateurs.forEach( (movie) => {
//printjson(movie)})

//-------------------------------------------------------------------
//Filtrer les films pour ne récupérer que celui le plus ancien
//var films = db.movies.find({},{}).sort({"fields.year":-1});
//films.forEach((film) => {
//   printjson(film.fields.year);
//});

//-------------------------------------------------------------------
//Augmenter le rank de 1000 pour tous les films dans lesquels a joué Charlize Theron






//-------------------------------------------------------------------
//Supprimer les films réalisés par Harald Zwart

//var films =  db.movies.remove({"fields.director":"Harald Zwart"},{});
//films.forEach((film) => {
//printjson(film.fields.title);
//});


//-------------------------------------------------------------------
//Ajouter l'acteur Key Key aux films "+1", "3D rou pu tuan zhi ji le bao jian" et "Anamorph"








//-------------------------------------------------------------------
//Faire un dump de la base de données avec mongodump.

