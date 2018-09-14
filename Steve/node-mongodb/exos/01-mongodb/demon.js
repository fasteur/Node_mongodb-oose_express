db = connect('technocite');
var tri = db.movies.find({$and : [{ "fields.actors" : 'Jennifer Lawrence' },{ "fields.actors" : 'Matt Damon'}] },{});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});




