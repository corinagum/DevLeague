var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var server = http.createServer(onRequest);

function onRequest(request, response) {
  var method = request.method;
  var uri = request.url;
  var body = "";
  var parsedChunk;
  var newElement;

  if(uri === "/") {
    uri = '/index.html';
  }
  //START GET REQUEST
  if(method === "GET") {
    response.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    fs.readFile('./public' + uri, function(err, data) {
      if(err) console.log(err);
      response.end(data.toString());
    });
  }
  // START POST REQUEST
  if(method === "POST") {

    request.on('data', function(chunk) {
      parsedChunk = querystring.parse(chunk.toString());
    });
    fs.readFile('./public/template.html', function(err, data) {
      if(err) console.log(err);
      newElement = data.toString();

      for (var key in parsedChunk) {
        newElement = newElement.replace(key, parsedChunk[key]);
      }
      console.log(parsedChunk);
    });
    response.end();
  }
    // console.log(requestHeader);


    request.on('end', function() {
      console.log('end of request');
    });
}

server.listen({
  host : 'localhost',
  port : 8080
}, function() {
  address = server.address();
  console.log("opened server address: ");
});