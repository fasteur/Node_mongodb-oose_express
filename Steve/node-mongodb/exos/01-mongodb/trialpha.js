db = connect('technocite');
var tri = db.movies.find().limit(25).sort(
{ 'fields.title' : 1 });
tri.forEach( (tri) => {
printjson(tri.fields.title)
});