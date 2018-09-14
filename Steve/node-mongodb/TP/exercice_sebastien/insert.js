db = connect("technocite");

let dbs = db.adminCommand("listDatabases");

// ----------------------------------------------- Ex1

// let movies = db.movies.find();

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex2

// let backup = db.movies.copyTo("backup");

// let moviesBackup = db.backup.find();

// moviesBackup.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex3A

// let movies = db.movies
//   .find({}, { "fields.title": 1, "fields.years": 1  })
//   .sort({ "fields.year": 1 })
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex3B

// let movies = db.movies
//   .find({}, { "fields.title": 1 })
//   .sort({ "fields.title": 1 })
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex3C

// let movies = db.movies
//   .find({}, { "fields.title": 1, "fields.rank": 1 })
//   .sort({ "fields.rank": -1 })
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex4A

// let movies = db.movies
//   .find(
//     { "fields.actors": { $in: ["Sharlto Copley"] } },
//     { "fields.title": 1, "fields.rank": 1, "fields.actors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex4B

// let movies = db.movies
//   .find(
//     { "fields.genres": { $in: ["Comedy"] } },
//     { "fields.title": 1, "fields.genres": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });

// ----------------------------------------------- Ex4C

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

// ----------------------------------------------- Ex4D

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

// ----------------------------------------------- Ex4E

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

// ----------------------------------------------- Ex4F

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

// ----------------------------------------------- Ex4G

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

// ----------------------------------------------- Ex5A

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

// ----------------------------------------------- Ex5B

// let movies = db.movies.remove(
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

// ----------------------------------------------- Ex5C

// let movies = db.movies.update(
//   {
//     "fields.title": {
//       $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"]
//     }
//   },
//   {
//     $push: { "fields.actors": "Key Key" }
//   },
//   { multi: true }
// );

// movies = db.movies
//   .find(
//     {
//       "fields.title": {
//         $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"]
//       }
//     },
//     { "fields.title": 1, "fields.actors": 1 }
//   )
//   .limit(10);

// movies.forEach(movie => {
//   printjson(movie);
// });
