const Express = require('express'),
    Router = Express.Router(),
    MovieController = require(`${process.cwd()}/api/controllers/movie`);


Router 
    .route('/')
    .get(MovieController.index)

Router 
    .route('/review/:id')
    .get(MovieController.details)
Router 
    .route('/about')
    .get(MovieController.about)
Router 
    .route('/reviews')
    .get(MovieController.reviews)

Router 
    .route('/reviews/:genre/:year/:page')
    .get(MovieController.filter)

    module.exports = Router