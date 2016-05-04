var port = parseInt(process.argv[2], 10) || 8080;
require('http').createServer(function(req, res) {
  req.pipe(res);
}).listen(port);
