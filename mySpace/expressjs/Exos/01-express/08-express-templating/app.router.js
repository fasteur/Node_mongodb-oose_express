const Express =require('express')
const Router = Express.Router()
const PageController = require(`${process.cwd()}/controllers/page`)
const DestinationController =require(`${process.cwd()}/controllers/destination`)

Router
.route('/')
.get(PageController.index);

Router
.route('/about')
.get(PageController.about); 

Router
.route('/destination/:id')
.get(DestinationController.details)

module.exports = Router;