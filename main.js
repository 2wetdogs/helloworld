// load the http module
var http = require('http');
var os = require("os");
var hostname = os.hostname();

// configure our HTTP server
var server = http.createServer(function (request, response) {
  if (req.url === '/helloworld' ) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from " + hostname + "./n Welcome!");
  } else {
    response.statusCode = 404;
    response.end('404: File Not Found');
  }
});

// listen on localhost:8000
server.listen(80);
console.log("Server listening at http://127.0.0.1:80/");
