const Fs= require('fs')
const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
const Read = Promisify(Fs.readFile);

module.exports = (req,res)=>{
    Read(`${process.cwd()}/views/home.html`,{encoding: 'UTF-8'})
    .then(result =>{
        // console.log(result)
        Read(`${process.cwd()}/models/destinations.json`, {encoding:'UTF-8'})
        .then((model)=>{
            let destinations = JSON.parse(model);
            let output = '';

            // -------------------------------
             let destinFliter = destinations.sort(compare);

            // console.log(destinFliter);          
            function compare(x, y) {
                return y.views - x.views;
            }
            for(let i=0; i<3;i++){
                output += `<li> ${destinFliter[i].city}, ${destinFliter[i].country} -- ${destinFliter[i].views}</li> `
            }
            // -------------------------------
            let template = result.replace(/{{LIST}}/g,output)
            res.end(template)
           
        })
        
    })
    .catch((error)=>console.log(error))
}