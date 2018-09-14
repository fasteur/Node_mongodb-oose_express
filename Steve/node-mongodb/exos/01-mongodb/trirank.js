db = connect('technocite');
var tri = db.movies.find().limit(25).sort(
{ 'fields.rank' : -1 });
tri.forEach( (tri) => {
printjson(tri.fields)
});