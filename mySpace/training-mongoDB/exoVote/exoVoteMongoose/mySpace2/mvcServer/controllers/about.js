const Fs= require('fs')
const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
const Read = Promisify(Fs.readFile);
const Add = require(`${process.cwd()}/helpers/add.js`)

module.exports = (req,res)=>{
    Read(`${process.cwd()}/views/about.html`,{encoding: 'UTF-8'})
    .then(result =>{
        if(req.method === 'GET'){
            res.end(result)
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
                Add(values[0][1],values[1][1]);
            })
            
            
        }
        
       
    })
    .catch((error)=>console.log(error))
}