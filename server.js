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
  request.heard = false;
  buzzWords.push(request);
  if( typeof request.buzzWord === 'string' && typeof request.points === 'number') {
    res.send( {
      'success': true
    });
  } else {
    res.send( {
      'success' : false
    });
    buzzWords.splice(request, 1);
  }
});

// accept PUT request on buzzword page
server.put('/buzzwords', function(req, res) {
  var putRequest = req.body;
  if( typeof putRequest.buzzWord === 'string' && putRequest.heard === 'true') {
    lookup(putRequest);
    res.send( {
      'success': true
    });
    }
});

//accept DELETE request on buzzword page
server.delete('/buzzwords', function(req, res) {
  var deleteRequest = req.body;
  if( typeof deleteRequest.buzzWord === 'string') {
    deleting(deleteRequest);
    res.send( {
      'success': true
    });
    }
});
//accept RESET request on buzzword
server.post('/reset', function(req, res) {
  buzzWords  = [];
  score = 0;
  res.send({
    'success': true
  });
});

var app = server.listen(3000, function () {
  var host = app.address().address;
  var port = app.address().port;
  console.log("Server Listening");
});

function lookup (putRequest) {
  for (var i = 0; i < buzzWords.length; i++) {
    if(buzzWords[i].buzzWord === putRequest.buzzWord) {
      buzzWords[i].heard = true;
      return true;
    }
    return false;
  }
}

function deleting (deleteRequest) {
   for (var i = 0; i < buzzWords.length; i++) {
    if(buzzWords[i].buzzWord === deleteRequest.buzzWord) {
      buzzWords.splice(i, 1);
      return true;
    }
    return false;
  }
}