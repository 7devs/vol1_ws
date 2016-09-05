var http = require('http');
//creat a server
//req:request; res:response
var server = http.createServer(function(req, res) {
  res.write('hello world');
  res.end();
});

server.listen(3000);
