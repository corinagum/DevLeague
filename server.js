// global variables: node methods and http server
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var server = http.createServer(onRequest);

// onRequest, main function of server
function onRequest(request, response) {
  var method = request.method;
  var uri = request.url;
  if(uri === "/") { // handles case where client did not enter a pathname.
    uri = '/index.html';
  }
  var fileType = uri.split('.');
  fileType = fileType[fileType.length-1];
  var body = "";
  var parsedChunk;
  var newElement;
  // console.log(request);

  getRequest(request, response, method, uri, fileType, body, parsedChunk, newElement);

  // START POST REQUEST
  if(method === "POST") {

    request.on('data', function(chunk) {
      parsedChunk = querystring.parse(chunk.toString());
    });

    //POST FILE
    fs.readFile('./public/template.html', function(err, data) {
      if(err) return console.log(err);
      newElement = data.toString(); // newElement is a string of the template.html file, to be altered
      parsedChunkCheck(parsedChunk);

      console.log(parsedChunk);
      for (var key in parsedChunk) {
        newElement = newElement.replace('{' + key + '}', parsedChunk[key]);
        newElement = newElement.replace('{' + key + '}', parsedChunk[key]);
      }

      fs.writeFile("./public/" + parsedChunk.elementName + ".html", newElement, 'utf8', function (err) {
        if(err) return console.log(err);
        console.log("New file saved!");
      });
      fs.readFile("./public/index.html", 'utf-8', function(err, indexTemplate) {
        if(err) return console.log(err);

        if(indexTemplate.indexOf(parsedChunk.elementName) !== -1) return console.log("index did not need alteration");
        renderedTemplate = indexTemplate.replace('<!-- insert comment here -->',
          '<li><a href="/' + parsedChunk.elementName + '.html">' + parsedChunk.elementName +
          '</a></li>\n' + '<!-- insert comment here -->');

          // begin count of elements
          fs.readdir('./public', function(err, numFiles) {
            listedElements = (numFiles.length-4);
            console.log(listedElements);
            renderedTemplate = renderedTemplate.replace(/(These are )\d*/, "These are " + listedElements);
            fs.writeFile('./public/index.html', renderedTemplate, function(err) {
              if(err) return console.log(err);
              return;
            });
          });

      });
    response.writeHead(200, {
      'Content-Type' : 'application/json'
    });

    response.write('{ "success" : true }');
    response.end();
    });
  }

  // START PUT REQUEST
    // =====================
    //PUT FILE
  if(method === "POST") {

    request.on('data', function(chunk) {
      parsedChunk = querystring.parse(chunk.toString());
    });
    fs.readFile('./public/template.html', 'utf-8', 'r+', function(err, data) {
      if(err) return console.log(err);
      newElement = data.toString(); // newElement is a string of the template.html file, to be altered
      parsedChunkCheck(parsedChunk);

      console.log(parsedChunk);
      for (var key in parsedChunk) {
        newElement = newElement.replace('{' + key + '}', parsedChunk[key]);
        newElement = newElement.replace('{' + key + '}', parsedChunk[key]);
      }

      fs.writeFile("./public/" + parsedChunk.elementName + ".html", newElement, 'utf8', function (err) {
        if(err) return console.log(err);
        console.log("New file saved!");
      });
      fs.readFile("./public/index.html", 'utf-8', function(err, indexTemplate) {
        if(err) return console.log(err);

        if(indexTemplate.indexOf(parsedChunk.elementName) !== -1) return console.log("index did not need alteration");
        renderedTemplate = indexTemplate.replace('<!-- insert comment here -->',
          '<li><a href="/' + parsedChunk.elementName + '.html">' + parsedChunk.elementName +
          '</a></li>\n' + '<!-- insert comment here -->');

          // begin count of elements
          fs.readdir('./public', function(err, numFiles) {
            listedElements = (numFiles.length-4);
            console.log(listedElements);
            renderedTemplate = renderedTemplate.replace(/(These are )\d*/, "These are " + listedElements);
            fs.writeFile('./public/index.html', renderedTemplate, function(err) {
              if(err) return console.log(err);
              return;
            });
          });
    // =====================
      });
    response.writeHead(200, {
      'Content-Type' : 'application/json'
    });

    response.write('{ "success" : true }');
    response.end();
    });
  }

  // on end of request
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

// START HELPER FUNCTIONS

//START GET REQUEST
function getRequest(request, response, method, uri, fileType, body, parsedChunk, newElement) {
  if(method === "GET") {

    response.writeHead(200, {
      'Content-Type' : 'text/' + fileType
    });
    fs.readFile('./public' + uri, function(err, data) {
      if(err) {
        return fs.readFile('./public/404.html', function(err, data){
          response.end(data.toString());
        });
      }
      return response.end(data.toString());
  });
  }
}
// END GET REQUEST

function parsedChunkCheck(parsedChunk) {
  if (!parsedChunk.elementName || !parsedChunk.elementSymbol || !parsedChunk.elementAtomicNumber || !parsedChunk.elementDescription) {
        response.writeHead(400, {
          'Content-Type' : 'application/json'
        });

      response.write('{ ' +
        '"success" : false, ' +
        '"message" : "must fill out all required keys to POST"' +
       '}');
      response.end();
    return console.log("to POST, be sure to fill out all required keys");
  }
}