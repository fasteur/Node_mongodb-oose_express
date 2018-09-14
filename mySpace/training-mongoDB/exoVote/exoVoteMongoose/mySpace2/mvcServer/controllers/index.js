
const Fs= require('fs')
const Util = require('util')
const Read = Util.promisify(Fs.readFile);


const Student = require(`${process.cwd()}/models/student`);


module.exports = async (req,res)=>{
    Read(`${process.cwd()}/views/index.html`,{encoding: 'UTF-8'})
    .then(async(result) =>{
    
          console.log(req.url);
       studen = await Student.find(
        {},{});
          
         let template = '';
         
         studen.forEach((stud)=>{
             
             template += `<li>${stud.lastname} ${stud.firstname} <a href="modif.html?id=${stud._id}">Modifier</a> <a href="remove.html?id=${stud._id}">Delete</a></li>`
         })
         let output = result.replace(/{{LIST}}/g,template);
         res.writeHead(200,{'Content-type':'text/html'})
         res.end(output)
         
     
    })
    .catch((error)=>console.log(error))
}