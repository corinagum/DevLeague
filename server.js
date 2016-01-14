var bodyParser = require('body-parser');
var express = require('express');
var server = express();

var buzzWords = [];

server.use(express.static('public'));
server.use(bodyParser.urlencoded({"extended":true}));

// accept GET requests on buzzword page
server.get('/buzzwords', function (req, res) {
  res.send(
    {
      'buzzWords' : buzzWords
    }
  );
});

// accept POST request on buzzword page
server.post('/buzzwords', function(req, res) {
  var request = req.body;
  request.points = parseInt(request.points);
  buzzWords.push(request);
  if( typeof request.buzzWord === 'string' && typeof request.points === 'number') {
    res.send( {
      'success': true
    });
  }
  res.send( {
    'success' : false
  });
});


var app = server.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;
  console.log("Server Listening");
});