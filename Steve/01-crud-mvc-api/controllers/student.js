
const Fs = require('fs');
const promisify = require('es6-promisify').promisify;
const Student = require('./../models/student');
const Read = promisify(Fs.readFile);
const Qs = require('querystring');
const Helper = require('./../helpers/');

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
exports.list = async (request, response) => {

  let output;
  let template = await read(process.cwd() + '/views/index.html', 'UTF-8');
  let html = '';

  let students = await Student.find({}).sort({ 'meta.votes' : -1 });
      
  students.forEach( (student) => {
    html += `<li>${student.firstname} ${student.lastname} - ${student.meta.votes} votes - <a href="/api/students/${student._id}">Details</a></li>`
  });

  output = template.replace(/{{LIST}}/, html);
  response.end(output); 
};

/**
 * 
 */
exports.new = async (request, response) => {
  let template = await Read(process.cwd() + '/views/new.html', 'UTF-8');
  response.end(template);
};

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
exports.create = async (request, response) => {

  response.setHeader('Content-Type', 'application/json');

  let res = {}, body = '';

  request.on('data', function (data) {
    body += data;
  });

  request.on('end', function () {

    let post = Qs.parse(body);
    let student = new Student({
      firstname : post.firstname,
      lastname : post.lastname,
    });

    student.save(function(err) {

      if(err) 
      {
        res.status = 500; 
        res.message = err.message;
      }
      else 
      {
        res.status = 200; 
        res.message = 'User created';
        res.payload = student;
      }
      
      response.end(JSON.stringify(res));
    });

  });
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
exports.read = async (request, response) => {

  let id = await Helper.parameter(request, response);

  if(!id)
    response.end(await Read(process.cwd() + '/views/error.html', 'UTF-8'));

  student = await Student.findOne({ _id : id });
  
  if(!student)
    response.end(await Read(process.cwd() + '/views/error.html', 'UTF-8'));

  let output;
  let details = `${student.firstname}  ${student.lastname} - Nombre de votes : <span id="ratings">${student.meta.votes}</span>`;
  let template = await Read(process.cwd() + '/views/read.html', 'UTF-8');

  output = template.replace(/{{DETAILS}}/, details).replace(/{{ID}}/g, id);

  response.end(output);

};

/**
 * 
 */
exports.edit = async (request, response) => {
  
  let id = await Helper.parameter(request, response);

  if(!id)
  {
    response.end(await Read(process.cwd() + '/views/error.html', 'UTF-8'));
  }

  let student = await Student.findById(id);
  let template = await Read(process.cwd() + '/views/edit.html', 'UTF-8');
  let output = '';

  output = template.replace(/{{FIRSTNAME}}/, student.firstname).replace(/{{LASTNAME}}/, student.lastname).replace(/{{ID}}/g, id);
  
  response.end(output);
};

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
exports.update = async (request, response) => {

  let res = {}, body = '';

  response.setHeader('Content-Type', 'application/json');

  request.on('data', function (data) {
    body += data;
  });

  request.on('end', async function () {

    let post = Qs.parse(body);

    let updated = await Student.findByIdAndUpdate(
      post._id, 
      { 
        lastname : post.lastname, 
        firstname : post.firstname 
      }, 
      { projection : { id : 1 } }
    );

    if(typeof(updated) === 'object' && updated._id)
    {
      res.status = 200; 
      res.message = 'User successfully updated';
    }
    else 
    {
      res.status = 500; 
      res.message = 'An error as occured';
    }

    response.end(JSON.stringify(res));
  });
};

/**
 * 
 */
exports.delete = async (request, response) => {

  let res = {}, id;

  response.setHeader('Content-Type', 'application/json');

  id = await Helper.parameter(request, response);

  if(!id)
  {
    res.status = 400; 
    res.message = 'Bad parameter';
    response.end(JSON.stringify(res));
  }

  let deleted = await Student.findByIdAndRemove(id);

  if(deleted._id)
  {
    res.status = 200; 
    res.message = 'Object successfully deleted';
  }
  else 
  {
    res.status = 500; 
    res.message = 'Error while deleting';
  }
  
  response.end(JSON.stringify(res));

};

/**
 * 
 */
exports.vote = async (request, response) => {

  response.setHeader('Content-Type', 'application/json');

  let id = await Helper.parameter(request, response);
  let res = {};

  if(!id)
  {
    res.status = 400; 
    res.message = 'Bad parameter';
  }

  let updated = await Student.findByIdAndUpdate(id, { $inc :  { 'meta.votes' : 1 } }, { projection : { 'meta' : 1 } });

  if(typeof(updated) === 'object' && updated._id)
  {
    updated.meta.votes = parseInt(updated.meta.votes) + 1;

    res.status = 200; 
    res.message = 'Vote updated';
    res.payload = updated;
  }
  else 
  {
    res.status = 500; 
    res.message = 'Error while voting';
  }

  response.end(JSON.stringify(res));
};