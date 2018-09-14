const Express = require('express'),
    Router = Express.Router(),
    UserController = require(`${process.cwd()}/api/controllers/user`);



Router 
    .route('/')
        .get(UserController.list)
        .post(
            UserController.validate, 
            UserController.create
        );

Router 
    .route('/:id')
        .get(UserController.returnUser)
        .patch(UserController.edit)
        .delete(UserController.delete)

module.exports = Router