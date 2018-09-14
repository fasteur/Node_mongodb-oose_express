const Fs= require('fs')
const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
const Read = Promisify(Fs.readFile);

module.exports = (req,res)=>{
    Read(`${process.cwd()}/views/index.html`,{encoding: 'UTF-8'})
    .then(result =>{
        // console.log(result)
        Read(`${process.cwd()}/models/contacts.json`, {encoding:'UTF-8'})
        .then((model)=>{
            let contacts = JSON.parse(model);
            let output = '';
            contacts.forEach((contact)=> {
                output += '<li>' +contact.name + '</li>'
            });
            let template = result.replace(/{{LIST}}/g,output)
            
            res.end(template)
            // console.log(model)
        })
        
    })
    .catch((error)=>console.log(error))
}