// load the http module
var http = require('http');
var os = require("os");
var hostname = os.hostname();

// configure our HTTP server
var server = http.createServer(function (request, response) {
  console.log(request.url)
  if (request.url === '/helloworld' ) {
    console.log("helloworld path")
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<html>Hello World from " + hostname + ".<br><br>Welcome!</html>");
  } else {
    console.log("no pathfound")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.statusCode = 404;
    response.end('404: File Not Found');
  }
});

// listen on localhost:80
server.listen(80);
console.log("Server listening at http://127.0.0.1:80/");
