const Fs= require('fs')
const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
const Read = Promisify(Fs.readFile);

module.exports = (req,res)=>{
    Read(`${process.cwd()}/views/destinations.html`,{encoding: 'UTF-8'})
    .then(result =>{
        // console.log(result)
        Read(`${process.cwd()}/models/destinations.json`, {encoding:'UTF-8'})
        .then((model)=>{
            let destinations = JSON.parse(model);
            let output = '';
        
            // ---ARRAY DESTINATIONS-----
            destinations.forEach((destination)=> {
                output += `<li> ${destination.city}, ${destination.country} : ${destination.price} <img src="${destination.picture}" width="50" height="50" alt=" ${destination.country}"></li> `
            });
            // -------------------------------
            let template = result.replace(/{{LIST}}/g,output)
            res.end(template)
           
        })
        
    })
    .catch((error)=>console.log(error))
}