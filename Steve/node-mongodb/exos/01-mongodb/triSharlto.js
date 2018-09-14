

db = connect('technocite');
var tri = db.movies.find({ 'fields.actors':'Sharlto Copley'},{});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});