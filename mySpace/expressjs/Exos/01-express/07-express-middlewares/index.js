const Express = require('express');
const app=Express();
const Parser=require('body-parser');
const Compression=require('compression');
const CORS = require('cors');

// body-parser: convertit automatiquement le payoad de la requête entrante
// et le rend disponible sous forme d'objet sur la propriété req.body

app.use(Parser.json());
app.use(Parser.urlencoded({extended:true}));

// compression compresse les requêtes http
app.use(Compression());

//Cors: gestion des requêtes dites 'cross-domain'
const CORSOptions ={
    origin: 'http://my-website.com',
    optionSuccessStatus: 200
}
//1. Utilidation middleware sur application || route
// différentes implémentations:
// - callback + callback
// - tablau de callbacks
// - combo callback + tableau de callbacks
app.get('/',CORS(CORSOptions),(req,res,next)=>{
   console.log('LOG 1');
   req.body={};
   req.body.custom={test:'test à manu'};
   next(); //sans next(), le middle<are ne fonctionne pas
},(req,res,next)=>{
   console.log('LOG 2');
   console.log(req.body);
   next();

},(req,res,next)=>{
   res.sendFile(`${process.cwd()}/views/index.html`);

});

// 2. Utilisation de middleware tiers
app.post('/',(req,res)=>{
   let data=req.body; //body-parser
   console.log(data);
   res.end();
})
// 3. Gestion des erreurs
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).end('ERROR')
})
app.listen(8001,()=>{
   console.log('serve running on port 8001');
});