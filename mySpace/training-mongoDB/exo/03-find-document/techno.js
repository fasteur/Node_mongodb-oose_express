db = connect('technocite')
var students = db.students.find()


students.forEach((student)=>{
    printjson(student)
})