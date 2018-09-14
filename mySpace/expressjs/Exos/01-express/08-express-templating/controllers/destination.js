exports.details=(req,res)=>{
    let id = req.params.id;
    if(!id){
        //res.sendFile('error404)
    }
    let destinations = require(`${process.cwd()}/models/destinations.json`);
    let destination = destinations.find(destination => destination._id === id)
    if(typeof(destination)=== 'undefined')
    {
        res.render('pages/404')
    }
    else
    {
    res.render('pages/details',{
        title:'Welcome on our page about',
        h1: destination.city+" - "+destination.country,
        hasFooter:true,
        destination:destination
        
        })
    }

    
    
}