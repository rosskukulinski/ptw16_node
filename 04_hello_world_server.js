var http = require('http');
var port = parseInt(process.argv[2], 10) || 8080;

http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello World!');
}).listen(port);

console.log('Listening on port %d', port);
