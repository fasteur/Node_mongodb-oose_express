const Express = require('express'),
    Router = Express.Router(),
    AuthController = require(`${process.cwd()}/api/controllers/auth`);
    

Router
    .route('/login')
    .post(AuthController.auth);

module.exports = Router

