db = connect('technocite');
var tri = db.movies.find({$and : [{ "fields.actors" : 'Jodie Foster' },{ "fields.actors" : 'Sharlto Copley'}] },{});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});

