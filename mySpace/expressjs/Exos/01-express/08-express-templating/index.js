const Express = require("express")
const app = Express()
const Engine = require('express-hbs');
const Router = require('./app.router')
const HBSHelpers = require('./app.hbs.helpers')
app.engine('hbs',Engine.express4({
    partialsDir : `${__dirname}/views/partials`,
    defaultLayout : `${__dirname}/views/layouts/default.hbs`
}));
app.set('view engine','hbs');

app.use(Express.static('public'));
HBSHelpers.registerHelpers(Engine)
app.get('/',(Router))

app.listen(8001,()=>{
    console.log('server is running on port 8001');
})