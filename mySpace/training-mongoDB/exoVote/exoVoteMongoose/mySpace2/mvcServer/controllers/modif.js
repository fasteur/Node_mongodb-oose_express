
const Fs= require('fs')
const Util = require('util')
const Read = Util.promisify(Fs.readFile);
const Student = require(`${process.cwd()}/models/student`);
const editFirstname = require(`${process.cwd()}/helpers/editFirstname.js`)
const editLastname = require(`${process.cwd()}/helpers/editLastname.js`)

module.exports = async (req,res)=>{
   
    Read(`${process.cwd()}/views/modif.html`,{encoding: 'UTF-8'})
    .then(async(result) =>{
     
        var ID = req.url.split('id=')[1]
        console.log(`modif var ID =${ID}`);
        if(req.method === 'GET'){
            studen = await Student.find(
                {},{});
                  
                 let template = '';
                 
                 studen.forEach((stud)=>{
                     
                     template += `<li>${stud.lastname} ${stud.firstname} <a href="modif.html?id=${stud._id}">Modifier</a></li>`
                 })
                 let output = result.replace(/{{LIST}}/g,template);
                 res.writeHead(200,{'Content-type':'text/html'})
                 res.end(output)
        }else if(req.method ==='POST'){
            let data = '';        
            // Récupération des paquets de la requête
            req.on('data', (chunk) => {
                data += chunk;              
            }); 
            req.on('end', async () => {
                let values =[]
                await data.split('&').forEach((item)=>{
                    values.push(item.split('='));
                });
             
                editFirstname(ID,values[0][1]);
                editLastname(ID,values[1][1]);
            })
            studen = await Student.find(
                {},{});
                  
                 let template = '';
                 
                 studen.forEach((stud)=>{
                     
                     template += `<li>${stud.lastname} ${stud.firstname} <a href="modif.html?id=${stud._id}">Modifier</a></li>`
                 })
                 let output = result.replace(/{{LIST}}/g,template);
                 res.writeHead(200,{'Content-type':'text/html'})
                 res.end(output)
            
        }
    
 
         
     
    })
    .catch((error)=>console.log(error))
}