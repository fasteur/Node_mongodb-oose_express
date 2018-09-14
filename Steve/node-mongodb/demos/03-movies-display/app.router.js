const routes = [
  { url : '/', controller : 'index' }
];

module.exports = (req, res) => {

  let index = routes.findIndex( (route) => { return route.url === req.url });

  if(index !== -1)
  {
    require(`${process.cwd()}/controllers/${routes[index].controller}`)(req,res);
  }
  else
  {
    res.end();
  }
};