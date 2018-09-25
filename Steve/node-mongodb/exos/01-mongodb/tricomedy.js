db = connect('technocite');
var tri = db.movies.find({ 'fields.genres':'Comedy'},{});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});