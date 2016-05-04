var http = require('http');
var port = parseInt(process.argv[2], 10) || 8080;
var server = http.createServer();

function handleRequest (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello ');
  res.write('World!');
  res.end();
}

server.on('request', handleRequest);

server.listen(port);
console.log('Listening on port %d', port);
