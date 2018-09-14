const Http = require('http')
const Router = require('./app.router')

Http.createServer(Router ).listen(8004, (err)=>{
    if(err) console.log(err);
    console.log("Server is running on port 8004")
})