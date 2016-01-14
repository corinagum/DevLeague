var express = require('express');
var server = express();

var individualBuzzWords = ["what", 'whatwhatwhat'];

server.use(express.static('public'));

server.get('/buzzwords', function (req, res) {
  res.send(individualBuzzWords);
});

var app = server.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;
  console.log("Server Listening");
});