// const GarbageCollector = require(`${process.cwd()}/modules/garbage-collector`);
// GarbageCollector('./')
GarbageCollector('./');
const GarbageCollector =function(data){
    const fs = require('fs');
// var path = './'
var repertoire =fs.readdirSync(data,(e)=>console.log(e))
// console.log(repertoire)
repertoire.forEach((elem)=>{
    // var rep =fs.readdirSync(`./${elem}`,(e)=>console.log(e));
    console.log(`${data}${elem}`)
    fs.stat(`${data}${elem}`,function(error, statS){
       console.log(statS.isDirectory() )
    })
    // console.log(stat)
    
})
}


