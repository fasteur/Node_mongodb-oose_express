const Http = require('http');

// const server = Http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Node server created!');
// });
const server = Http.createServer((req, res)=>{
    let output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Super ton premier serveur Node!</h1>
    </body>
    </html>`
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(output);
});

server.listen(8000);
console.log("Node server listen port 8000 : http://localhost:8000");
