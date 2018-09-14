const Express = require('express');
const app = Express();
const fs = require('fs');
app.get('/',(req,res,next)=>{
    fs.appendFile(`${process.cwd()}/blocText/bloc.txt`, Date.now()+'\n', () => {
        
        console.log('The file has been saved!');
        next()
      });
   
},(req,res)=>{
    res.sendFile(`${process.cwd()}/views/index.html`)
})
app.listen(8001, ()=>{
    console.log('App listen on port 8001');
});