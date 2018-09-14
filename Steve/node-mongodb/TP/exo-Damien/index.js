db = connect('technocite');
let dbs = db.adminCommand('listDatabases');
//printjson(dbs);

//db.movies.copyTo("backUpMovies")

//3. Lister les films par :
/////////////////// Année de sortie de la plus récente à la plus ancienne

/* let releaseMovies = db.movies.find({},{ _id : 0,"fields.title":1, "fields.release_date":1})
 .sort({"fields.release_date":-1}).limit(10);

 releaseMovies.forEach((result) => {
    printjson(result)
})
*/

/////////////////// Titre dans l'ordre alphabétique

/* let azmovies = db.movies.find({},{ _id : 0,"fields.title":1}).sort({"fields.title":1}).limit(10);
 azmovies.forEach((result) => {
    printjson(result)
})
*/

/////////////////// Rank du plus élevé au plus faible

/*
let azmovies = db.movies.find({},{ _id : 0,"fields.rank":1,"fields.title":1}).sort({"fields.rank":1}).limit(10);
azmovies.forEach((result) => {
   printjson(result)
})
*/

// 4. Filtrer les films pour ne récupérer que celui/ceux :

/////////////////// Dans lesquels a joué Sharlto Copley

/*
let sharlto = db.movies.find(
    { 
    'fields.actors': { $in: ["Sharlto Copley"] }} ,
    
    {_id: 0, 'fields.title':1})

sharlto.forEach((result) => {
    printjson(result)
})
*/

///////////////////  Qui sont des comédies

/*
let genres = db.movies.find(
    {'fields.genres': { $in: ["Comedy"] }} ,
    {_id: 0, 'fields.title':1})

genres.forEach((result) => {
    printjson(result)
})
*/


///////////////////  Sortis entre 2002 et 2008

// let movies = db.movies
//   .find(
//     {
//       $and: [{ "fields.year": { $lt: 2008 } }, { "fields.year": { $gt: 2002 } }]
//     },
//     { "fields.title": 1, "fields.year": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });



///////////////////  Dans lesquels ont joué conjointement Jennifer Lawrence et Matt Damon

// let movies = db.movies
//   .find(
//     {
//       $and: [
//         { "fields.actors": { $in: ["Jennifer Lawrence"] } },
//         { "fields.actors": { $in: ["Matt Damon"] } }
//       ]
//     },
//     { "fields.title": 1, "fields.actors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });



///////////////////  Dans lesquels ont joué conjointement Jodie Foster et Sharlto Copley


// let movies = db.movies
//   .find(
//     {
//       $and: [
//         { "fields.actors": { $in: ["Sharlto Copley"] } },
//         { "fields.actors": { $in: ["Jodie Foster"] } }
//       ]
//     },
//     { "fields.title": 1, "fields.actors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });


///////////////////  Réalisés par Neil Burger ou Brad Furman

// let movies = db.movies
//   .find(
//     {
//       $or: [
//         { "fields.directors": { $in: ["Brad Furman"] } },
//         { "fields.directors": { $in: ["Neil Burger"] } }
//       ]
//     },
//     { "fields.title": 1, "fields.directors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });



///////////////////  Le plus ancien

// let movies = db.movies
//   .find(
//     { "fields.year": { $exists: true } },
//     { "fields.title": 1, "fields.year": 1 }
//   )
//   .sort({ "fields.year": 1 })
//   .limit(1);

// movies.forEach(movie => {
//   printjson(movie);
// });


// 5. Effectuer les actions suivantes :

///////////////////Augmenter le rank de 1000 pour tous les films dans lesquels a joué Charlize Theron

// let movies = db.movies.update(
//   { "fields.actors": { $in: ["Charlize Theron"] } },
//   {
//     $inc: { "fields.rank": 1000 }
//   },
//   { multi: true }
// );

// movies = db.movies
//   .find(
//     { "fields.actors": { $in: ["Charlize Theron"] } },
//     { "fields.title": 1, "fields.rank": 1, "fields.actors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });


///////////////////Supprimer les films réalisés par Harald Zwart

// var movies = db.movies.remove(
//   { "fields.directors": { $in: ["Harald Zwart"] } },
//   { justOne: false }
// );

// movies = db.movies
//   .find(
//     { "fields.directors": { $in: ["Harald Zwart"] } },
//     { "fields.title": 1, "fields.directors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });


///////////////////Ajouter l'acteur Key Key aux films "+1", "3D rou pu tuan zhi ji le bao jian" et "Anamorph"


let movies = db.movies.update(
    {
        "fields.title": {
            $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"]
        }
    },
    {
        $push: { "fields.actors": "Key Key" }
    },
    { multi: true }
);

movies = db.movies
    .find(
        {
            "fields.title": {
                $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"]
            }
        },
        { "fields.title": 1, "fields.actors": 1 }
    )
    .limit(10);

movies.forEach(movie => {
    printjson(movie);
});