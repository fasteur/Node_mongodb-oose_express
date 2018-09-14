const Express = require('express');
const App = Express(); //j'instancie Express et je l'a met ds App + précisément je l'exécute! Et ici ça nous retourne une instance Expressnode

//Diff méthodes st implémentées via app.Method  
// 1. route + callack
// App.get('/',(req,res)=>{
//     res.sendFile(`${process.cwd()}/views/index.html`)
// });
App.get('/about.html',(req,res)=>{
    res.sendFile(`${process.cwd()}/views/about.html`)
});
//---------------------------------
// App.get()
// App.delete()
// App.patch()
// App.post()

// 2. route + callback + callback + callback...
App.get('/',
(req,res,next)=>{
    console.log('Callback 1');
    next();
},(req,res,next)=>{
    console.log('Callback 2');
    next();
},(req,res,next)=>{
    console.log('Callback 3');
    res.sendFile(`${process.cwd()}/views/index.html`)
})
// 3. route + [callbacks] = tableau de callbacks
// 4. combo route + [callbacks] + callback + callback2 + n

// -------------------------------------
App.listen(8001, ()=>{
    console.log('App listen on port 8001');
});