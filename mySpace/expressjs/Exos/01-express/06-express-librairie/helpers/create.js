db = connect('technocite')

var dbs = db.adminCommand('listDatabases')
print('Liste des DB AVANT insertion du 1er document :\n')
printjson(dbs)
// var librairie = { 
//     title:'florian',
//     author:'asteur',
//     date:'02/05/1950',
//     rating:0
// }
// var books = []
// db.books.insert(librairie);
