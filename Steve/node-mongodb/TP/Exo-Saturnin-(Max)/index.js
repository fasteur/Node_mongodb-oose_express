db = connect("technocite");

var dbs = db.adminCommand('listDatabases')
printjson(dbs)


// var movies = db.movies.find();

// movies.forEach((movie) => {
//     printjson(movie);
// });


// var copie = db.movies.copyTo("copieCollection");

// exo 3 1

// var dateSortie = db.movies.find({}, { "fields.title": 1, "fields.year": 1 }).sort({ "fields.year": -1 }).limit(10)
// dateSortie.forEach((movie) => {
//     printjson(movie)
// });


// 3 2

// var ordreAlpha = db.movies.find({}, { "fields.title": 1, "fields.year": 1 }).sort({ "fields.title": -1 }).limit(10)
// ordreAlpha.forEach((movie) => {
//     printjson(movie)
// });

// 3 3


// var ordreAlpha = db.movies.find({}, { "fields.title": 1, "fields.rank": 1 }).sort({ "fields.rank": 1 }).limit(10)
// ordreAlpha.forEach((movie) => {
//     printjson(movie)
// });

// 4

// var ordreAlpha = db.movies.find({ "fields.actors": "Sharlto Copley" }, { "fields.title": 1, "fields.actors": 1 }).limit(10)


// ordreAlpha.forEach((movie) => {
//     printjson(movie)
// });


// 4 2

// var genre = db.movies.find({ "fields.genres": "Comedy" }, { "fields.title": 1, "fields.genres": 1 }).limit(10)


// genre.forEach((movie) => {
//     printjson(movie)
// });

// 4 3 

// var genre = db.movies.find(
//     {
//         $or: [{ "fields.year": 2002 }, { "fields.year": 2003 }, { "fields.year": 2004 }, { "fields.year": 2005 }, { "fields.year": 2006 }, { "fields.year": 2007 }, { "fields.year": 2008 }]
//     }).limit(10)


// genre.forEach((movie) => {
//     printjson(movie)
// });

// 4 4

// var genre = db.movies.find(
//     {
//         $and: [{ "fields.actors": "Jennifer Lawrence" }, { "fields.actors": "Matt Damon" }]
//     }).limit(10)


// genre.forEach((movie) => {
//     printjson(movie)
// });


// 4 5
// var actor = db.movies.find(
//     {
//         $and: [{ "fields.actors": "Jodie Foster" }, { "fields.actors": "Sharlto Copley" }]
//     }).limit(10)


// actor.forEach((movie) => {
//     printjson(movie)
// });

// 4 6 

// var director = db.movies.find(
//     {
//         $or: [{ "fields.directors": "Neil Burger" }, { "fields.directors": "Brad Furman" }]
//     }).limit(10)


// director.forEach((movie) => {
//     printjson(movie)
// });


// 4 7

// let dragon = db.movies
//     .find(
//         { "fields.year": { $exists: true } },
//         { "fields.title": 1, "fields.year": 1 }
//     )
//     .sort({ "fields.year": 1 })
//     .limit(1);

// dragon.forEach(movie => {
//     printjson(movie);
// });

// 5



// let genre = db.genre.update(
//     { "fields.actors": "Charlize Theron" },
//     {
//         $inc: { "fields.rank": 1000 }
//     },
//     { multi: true }
// );

// genre = db.movies
//     .find(
//         { "fields.actors": { $in: ["Charlize Theron"] } },
//         { "fields.title": 1, "fields.rank": 1, "fields.actors": 1 }
//     )
//     .limit(10);

// genre.forEach(movie => {
//     printjson(movie);
// });


// 5 2 

// let genre = db.movies.remove(
//     { "fields.directors": "Harald Zwart" },
//     { justOne: false }
// );

// genre = db.genre
//     .find(
//         { "fields.directors": "Harald Zwart" },
//         { "fields.title": 1, "fields.directors": 1 }
//     )
//     .limit(10);

// genre.forEach(movie => {
//     printjson(movie);
// });

// 5 3

let genre = db.movies.update(
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

genre = db.movies
    .find(
        {
            "fields.title": {
                $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"]
            }
        },
        { "fields.title": 1, "fields.actors": 1 }
    )
    .limit(10);

genre.forEach(movie => {
    printjson(movie);
});
