const Fs= require('fs')
const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
const Read = Promisify(Fs.readFile);

module.exports = (req,res)=>{
    Read(`${process.cwd()}/views/about.html`,{encoding: 'UTF-8'})
    .then(result =>{
        // console.log(result)
        res.end(result)
       
    })
    .catch((error)=>console.log(error))
}