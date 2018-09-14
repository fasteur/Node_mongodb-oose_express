
const Fs= require('fs')
const Util = require('util')
const Read = Util.promisify(Fs.readFile);
const Student = require(`${process.cwd()}/models/student`);
const findName = require(`${process.cwd()}/helpers/find.js`)
const deleteName = require(`${process.cwd()}/helpers/delete.js`)

module.exports = async (req,res)=>{
   
    Read(`${process.cwd()}/views/remove.html`,{encoding: 'UTF-8'})
    .then(async(result) =>{
     
        var ID = req.url.split('id=')[1]
        console.log(`modif var ID =${ID}`);
        let noms = await findName(ID); 
        console.log(`CLG de noms ds remove.js = ${noms}`);
        if(req.method === 'GET'){
           
                  
                 let template = `${noms.firstname} ${noms.lastname}`;
                 
                
                 let output = result.replace(/{{LIST}}/g,`Etes vous sur de vouloir supprimer ${template} ?`);
                 res.writeHead(200,{'Content-type':'text/html'})
                 res.end(output)
        }else if(req.method ==='POST'){
           deleteName(ID)
            let output = result.replace(/{{LIST}}/g,'DELETED');
                 res.writeHead(200,{'Content-type':'text/html'})
                 res.end(output)
            
        }
    
 
         
     
    })
    .catch((error)=>console.log(error))
}