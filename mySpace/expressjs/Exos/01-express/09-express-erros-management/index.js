const Express = require('express')
const ErrorHandler = require('errorhandler')
const Dotenv = require('dotenv')
const app = Express()
const ErrorHelper =require('./helpers/error-handler')

Dotenv.config({path: './variables.env'})

// Ici toutes mes routes, en mode brut || Router
app.get('/',(req , res)=>{
connsole.log('Test');
res.end('Test')
})
// APRES  la définition des droutes || du router, je définis la gestion des erreurs

// Développement
if(process.env.APP_ENV === 'development')
{
    //j'ajoute et configure le middleware sur l'objet app
    app.use(ErrorHandler({log: ErrorHelper.notify}))
}

// production : middleware natif gestion erreur
app.use((err, req, res, next)=>{
    // TODO log des erreurs
    res.status(500).send('ERROR 500')
})

app.listen(8001, ()=>{
    console.log('Server is running on port 8001');
})