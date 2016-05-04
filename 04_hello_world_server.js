var http = require('http');
var port = 8080;

http.createServer(function handleRequest(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello World!');
}).listen(port);

console.log('Listening on port %d', port);
