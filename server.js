var express = require('express');
var server = express();

server.use(express.static('public'));


var app = server.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;
  console.log("Server Listening");
});