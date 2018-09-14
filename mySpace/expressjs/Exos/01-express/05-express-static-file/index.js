const Express = require('express');
const App = Express();
// Répertoire statique physique 

App.use(Express.static('public'))
// App.use(Express.static(__dirname + 'public'))

// ---Répertoire statique virtuel----
// App.use('virtual-public', Express.static(__dirname + 'public'))

App.get('/',(req,res)=>{
    res.sendFile(`${process.cwd()}/views/index.html`)
})
App.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).sendFile(`${process.cwd()}/views/error.html`)
})
App.listen(8001, ()=>{
    console.log('App listening on port 8001');
} )