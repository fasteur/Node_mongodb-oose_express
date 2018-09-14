db = connect('technocite');
var tri = db.movies.find().limit(15).sort(
{ 'fields.year' : -1 });
tri.forEach( (tri) => {
printjson(tri.fields)
});