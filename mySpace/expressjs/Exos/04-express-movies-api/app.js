const Express = require('express'),
    ErrorHandler= require('errorhandler'),
    app = Express(),
    ErrorHelper = require('./api/helpers/error-handler'),
    LocalStrategy = require('passport-local').Strategy,
    Passport = require('passport'),
    DotEnv = require('dotenv'),
    BodyParser = require('body-parser'),
    User = require('./api/models/user'),
    AuthRouter = require('./api/routes/auth'),
    MovieRouter = require('./api/routes/movie'),
    UserRouter = require('./api/routes/user'),
    ExpressValidator = require('express-validator')

//----------------------------------------------------------------------->
DotEnv.config( { path : './variables.env'})
//----------------------------------------------------------------------->
//body parser 
app.use( BodyParser.json() );
app.use( BodyParser.urlencoded({ extended : true} ) ); 
//----------------------------------------------------------------------->
/**
 * Passport configuration 
 */
Passport.use( User.createStrategy() );
Passport.serializeUser( User.serializeUser() );
Passport.deserializeUser( User.deserializeUser() ); 
//----------------------------------------------------------------------->
/**
 * Define passport module initialize
 */
app.use( Passport.initialize())
//----------------------------------------------------------------------->
/**
 * 
 */
app.use(ExpressValidator())
//----------------------------------------------------------------------->
/**
Set Router on */
app.use('/auth', AuthRouter)
//----------------------------------------------------------------------->
/**
Set Router on */
app.use('/movie', MovieRouter)
//----------------------------------------------------------------------->
/**
Set Router on */
app.use('/user', UserRouter)
//----------------------------------------------------------------------->

/**
 * Errors handler
 */
if(process.env.APP_ENV === 'development')
{
    app.use( ErrorHandler( { log : ErrorHelper.notify }))
}
//----------------------------------------------------------------------->
/**
 * 
 */
module.exports = app