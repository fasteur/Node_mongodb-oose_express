const Express = require('express');
const App = Express();
const Router = require('./app.router.js')

App.use('/',Router);

App.listen(8001, ()=>{
    console.log('App listening on port 8001');
} )