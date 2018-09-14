const Express = require('express')
const Router = Express.Router()
const PageController = require('./controllers/page');
// Router
//     .route('/')
//     .get(PageController.index)
//     .post(PageController.index)

// Middleware sur toutes les routes 
Router.use('/',(req, res, next)=>{
    //Log des requêtes
    console.log('WE LOG REQUEST');
    next()
})
Router.get('/', PageController.index)
Router.get('/delete.html', PageController.delete)
Router.get('/delete.html/:id', PageController.delete)
Router.get('/edit.html', PageController.edit)
Router.get('/edit.html/:id', PageController.edit)
Router.get('/add.html', PageController.add)
Router.post('/add.html', PageController.add)

module.exports =Router; 