db = connect("localhost:27017/ee");
// RANK : var Cursor = db.movies_mongodb.find({},{"fields.rank":1}).sort({ 'fields.rank':-1 });
// TITLE : var Cursor = db.movies_mongodb.find({},{"fields.title":1}).sort({ 'fields.title': 1 });
// YEAR : var Cursor = db.movies_mongodb.find({},{"fields.year":1}).sort({ 'fields.year':-1 });

// Sharlto Copley : 
//var Cursor = db.movies_mongodb.aggregate( [ { $unwind : "$fields.actors" } ] );
// Cursor = db.movies_mongodb.find({"fields.actors":"Sharlto Copley"},{'fields.title':1});

// Comédie
//var Cursor = db.movies_mongodb.aggregate( [ { $unwind : "$fields.genres" } ] );
// Cursor = db.movies_mongodb.find({"fields.genres":"Comedy"},{'fields.title':1});


// Entre 2002 et 2008
// var Cursor = db.movies_mongodb.find({ $and: [ { "fields.year": { $gt: 2002 } }, { "fields.year": { $lt: 2008 } } ] },{'fields.title':1});

// Matt Damon et Jennifer Lawrence
// var Cursor = db.movies_mongodb.find({ "fields.actors": { $all: ["Jennifer Lawrence", "Matt Damon"] }},{'fields.title':1});

// Jodie Foster et Sharlto Copley
// var Cursor = db.movies_mongodb.find({ "fields.actors": { $all: ["Jodie Foster", "Sharlto Copley"] }},{'fields.title':1});

// Neil Burger ou Brad Furman
// var Cursor = db.movies_mongodb.find({ "fields.directors": { $in: ["Neil Burger", "Brad Furman"] }},{'fields.title':1});



// Le plus ancien
//var Cursor = db.movies_mongodb.aggregate([
 //   {
 //       "$group": {
 //           "_id": null,
 //           "min": { "$min": "$fields.year" }
 //       }
  //  }
//])
//Cursor.forEach(function (el) {
  //  print(el.min)
  //  var Cursor2 = db.movies_mongodb.find({ "fields.year": el.min }, {});
 //   Cursor2.forEach(function (el2) {
 //       printjson(el2);
  //  });
//});


// Ajout 1000 au rank des films de Therons
//var Cursor = db.movies_mongodb.update(
//    { "fields.actors": { $in: ["Charlize Theron"] }},
//  {  $inc: { "rank": 1000, "metrics.orders": 1 }}
//);
//Cursor = db.movies_mongodb.find({ "fields.actors": { $in: ["Charlize Theron"] }},{});

// Suprimer les films de Zwart
// db.collection.remove({ "fields.directors": { $in: ["Harald Zwart"] }});

// Ajout de Key Key
//db.students.update(
//    { $or: [ {"fields.title":"+1"}, {"fields.title":"3D rou pu tuan zhi ji le bao jian"}, {"fields.title":"Anamorph"}] },
//    { $push: { "fields.actors": "Key Key" } }
// )


Cursor.forEach(function (el) {
printjson(el);
});