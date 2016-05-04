var port = 8080;
require('http').createServer(function handleRequest(req, res) {
  req.pipe(res);
}).listen(port);

console.log('listening on port 8080');
