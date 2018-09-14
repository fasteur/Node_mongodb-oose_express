const routes = [ 
    {url: '/', controller : 'index'},
    {url:'/about.html',controller: 'about'},
    {url:'/modif.html',controller: 'modif'},
    {url:'/remove.html',controller: 'remove'},
];
module.exports = (req, res)=>{
    let index =routes.findIndex((item)=> item.url ===req.url.split('?')[0])
  
    if(index !== -1)
    {
        require(`${process.cwd()}/controllers/${routes[index].controller}`)(req, res);
    }
    else
    {
        require(`${process.cwd()}/controllers/error.js`)(req, res);
    }
};