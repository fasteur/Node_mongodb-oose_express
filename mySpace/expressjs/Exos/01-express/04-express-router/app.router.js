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
Router.get('/about.html', PageController.about)
Router.get('/services.html', PageController.services)
Router.get('/contact.html', PageController.contact)

module.exports =Router; 