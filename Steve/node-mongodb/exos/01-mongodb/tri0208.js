db = connect('technocite');
var tri = db.movies.find({ 'fields.year':{$in:[2002,2003,2004,2005,2006,2007,2008]}});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});