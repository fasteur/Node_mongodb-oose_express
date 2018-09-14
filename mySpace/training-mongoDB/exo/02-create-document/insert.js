db = connect('technocite')

var dbs = db.adminCommand('listDatabases')
print('Liste des DB AVANT insertion du 1er document :\n')
printjson(dbs)
var student = { 
    lastname:'florian',
    firstname:'asteur',
    email:'florian.asteur@gmail.com'
}
var students = []
db.students.insert(student);


print('Liste des DB APRES insertion du 1er document:\n');
printjson(dbs);
