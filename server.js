var bodyParser = require('body-parser');
var express = require('express');
var server = express();

var individualBuzzWords = ["what", 'whatwhatwhat'];

server.use(express.static('public'));

// accept GET requests on buzzword page
server.get('/buzzwords', function (req, res) {
  res.send(individualBuzzWords);
});

// accept POST request on buzzword page
server.post('/buzzwords', function(req, res) {
  var request = req.body;
  if(request.buzzWord) {
    res.send( {
      'success': true
    });
  }
});


var app = server.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;
  console.log("Server Listening");
});