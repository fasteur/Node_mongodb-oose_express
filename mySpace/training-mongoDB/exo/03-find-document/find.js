db = connect('technocite')
var students = db.students.find(
    {lastname:{$in:["florian","manu"]}},{})


students.forEach((student)=>{
    printjson(student)
})