// Année de sortie de la plus récente à la plus ancienne
db = connect('technocite');

var films = db.movies.find({}, {}).limit(10);
films.forEach((films) => {

    printjson(films);
});

//Titre dans l'ordre alphabétique
db = connect('technocite');
var tri = db.movies.find().limit(25).sort({
    'fields.title': 1
});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Rank du plus élevé au plus faible
db = connect('technocite');
var tri = db.movies.find().limit(25).sort({
    'fields.rank': -1
});
tri.forEach((tri) => {
    printjson(tri.fields)
});

//Dans lesquels a joué Sharlto Copley
db = connect('technocite');
var tri = db.movies.find({
    'fields.actors': 'Sharlto Copley'
}, {});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Qui sont des comédies
db = connect('technocite');
var tri = db.movies.find({
    'fields.genres': 'Comedy'
}, {});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

// Sortis entre 2002 et 2008
db = connect('technocite');
var tri = db.movies.find({
    'fields.year': {
        $in: [2002, 2003, 2004, 2005, 2006, 2007, 2008]
    }
});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Dans lesquels ont joué conjointement Jennifer Lawrence et Matt Damon

db = connect('technocite');
var tri = db.movies.find({
    $and: [{
        "fields.actors": 'Jennifer Lawrence'
    }, {
        "fields.actors": 'Matt Damon'
    }]
}, {});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Dans lesquels ont joué conjointement Jodie Foster et Sharlto Copley

db = connect('technocite');
var tri = db.movies.find({
    $and: [{
        "fields.actors": 'Jodie Foster'
    }, {
        "fields.actors": 'Sharlto Copley'
    }]
}, {});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Réalisés par Neil Burger ou Brad Furman
db = connect('technocite');
var tri = db.movies.find({
    $or: [{
        "fields.directors": 'Neil Burger'
    }, {
        "fields.directors": 'Brad Furman'
    }]
}, {});
tri.forEach((tri) => {
    printjson(tri.fields.title)
});

//Le plus ancien
db = connect('technocite');
var tri = db.movies.find().limit(1).sort({
    
    'fields.year': 1
});
tri.forEach((tri) => {
    printjson(tri.fields)
});

//Augmenter le rank de 1000 pour tous les films dans lesquels a joué Charlize Theron
db = connect('technocite');
var tri = db.movies.find({
    'fields.actors': 'Charlize Theron'
}, {});
tri.forEach(() => {

    fields.rank += 1000
    db.movies.save

});

// Supprimer les films réalisés par Harald Zwart
db.movies.remove({
    'fields.directors': 'Harald Zwart'
}, {
    'multi': true
});

//Ajouter l'acteur Key Key aux films "+1", "3D rou pu tuan zhi ji le bao jian" et "Anamorph"
db = connect('technocite');
var tri = db.movies.find({
    $and: [{
        "fields.title": '+1'
    }, {
        "fields.title": '3D rou pu tuan zhi ji le bao jian'
    }, {
        "fields.title": 'Anamorph'
    }]
}, {});
tri.forEach((tri) => {

    db.movies.save({
        'actors': 'Key Key'
    }, {
        'multi': true
    });

    printjson(tri)
});

//Faire un dump de la base de données

db = connect('technocite');
db.movies.copyTo(dumpmovies)