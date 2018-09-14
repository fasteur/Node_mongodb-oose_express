db = connect('technocite')
var student={}
student= db.students.update({lastname:'florian'},{firstname:'Asteur'},{mutli:true})

    printjson(student)
