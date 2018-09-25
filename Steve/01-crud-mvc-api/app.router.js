const Helper = require('./helpers/');

let routes = [
  { url : '/', controller : 'student', method : 'GET', action : 'list' },
  { url : '/api/students/new', controller : 'student', method : 'GET', action : 'new' },
  { url : '/api/students/edit/:id', controller : 'student', method: 'GET', action : 'edit' },
  { url : '/api/students', controller : 'student', method : 'POST', action : 'create' },
  { url : '/api/students/:id', controller : 'student', method : 'GET', action : 'read' },
  { url : '/api/students/:id', controller : 'student', method : 'PATCH', action : 'update' },
  { url : '/api/students/:id', controller : 'student', method : 'DELETE', action : 'delete' },
  { url : '/api/students/vote/:id', controller : 'student', method : 'POST', action : 'vote' },
];

module.exports = async ( request, response ) => {

  let newRoutes = await Helper.parser(request, response, routes);

  let index = newRoutes.findIndex( (route) => route.url === request.url && route.method === request.method );
  let controller;

  if(index !== -1)
  {
    controller = require(process.cwd() + '/controllers/' + routes[index].controller);

    if(!controller || typeof(controller[routes[index].action]) !== 'function')
    {
      response.end();
    }
    
    controller[routes[index].action](request, response);
  }
  else if(request.url !== '/favicon.ico')
  {
    response.end();
  }
};