const routes = [ 
    {url: '/', controller : 'index'},
    {url:'/about.html',controller: 'about'}
];
module.exports = (req, res)=>{
    let index =routes.findIndex((item)=> item.url ===req.url)
    // let controller;
    if(index !== -1)
    {
        require(`${process.cwd()}/controllers/${routes[index].controller}`)(req, res);
        // ---> mm chose différente syntaxe-->
        // require(`${process.cwd()}:controllers/${routes[index].controller}`)
        // controller(req, res)
    }
    else
    {
        require(`${process.cwd()}/controllers/error.js`)(req, res);
    }
};