const http = require('http');

const fs = require('fs');

const path = require('path');



const serveur = http.createServer((req, res) => {



   console.log(req.method);

   console.log(req.url);

   if (req.url === '/') {

       fs.readFile(`${process.cwd()}/public/views/index.html`, 'UTF-8', (err, output) => {

           if (err) console.log(err);

           res.writeHead(200, {

               'content-type': 'text/html'

           });

           res.end(output);

       });



   }else if(req.url==='/about.html')

   {

       fs.readFile(`${process.cwd()}/public/views/about.html`, 'UTF-8', (err, output) => {

           if (err) console.log(err);

           res.writeHead(200, {'content-type': 'text/html'});

           res.end(output);

   });

}else if(req.url.match(/.css$/)){

    let path_css=path.join(__dirname, 'public','assets','css',req.url);

    let stream_css=fs.createReadStream(path_css,'UTF-8');

    res.writeHead(200,{'Content-type': 'text/css'});

    stream_css.pipe(res);

}else if(req.url.match(/.js$/)){

   let path_js=path.join(__dirname, 'public','assets','js',req.url);

   let stream_js=fs.createReadStream(path_js,'UTF-8');

   res.writeHead(200,{'Content-type': 'text/js'});

   stream_js.pipe(res);

}

else if(req.url.match(/.html$/)){

   fs.readFile(`${process.cwd()}/public/views/404.html`, 'UTF-8', (err, output) => {

       if (err) console.log(err);

       res.writeHead(200, {'content-type': 'text/html'});

       res.end(output);

   });

} else {

       res.end();

   }

});

serveur.listen(8001);