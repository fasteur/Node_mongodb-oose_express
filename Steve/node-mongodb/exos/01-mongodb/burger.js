db = connect('technocite');
var tri = db.movies.find({$or : [{ "fields.directors" : 'Neil Burger' },{ "fields.directors" : 'Brad Furman'}] },{});
tri.forEach( (tri) => {
printjson(tri.fields.title)
});