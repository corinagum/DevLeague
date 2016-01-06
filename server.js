var net = require('net');
var fs = require('fs');
var server = net.createServer(onConnect);
var date = new Date();

function onConnect(socket) {
  socket.on('connect', function(){
    console.log('client connecting');
  });

  socket.on('data', function(buffer) {
    // something on socket, data response
    var bufferArray = buffer.toString().split(' ');
    var requestMethod = bufferArray[0];
    var requestPage = bufferArray[1];
    var fileType = requestPage.split('.');
    fileType = fileType[fileType.length-1];

    request(socket, requestPage, fileType, requestMethod);
  });
  socket.on('end', function(){
    console.log('server disconnect');
  });
}

function request(socket, requestPage, fileType, requestMethod) {
  if(requestPage === "/") {
    requestPage = '/index.html';
  }
  return fs.readFile('.'+ requestPage, 'utf-8', function(err, data) {
    if (err) {
      requestPage = '/404.html';
      return fs.readFile('.'+requestPage, 'utf-8', function(err, data) {
      socket.write(header(date, data) + data);
      socket.end();
      });
    }
    if (requestMethod === 'HEAD') {
      socket.write(header(date, data));
      socket.end();
    } else {
    socket.write( header(date, data)+
    data);
    socket.end();
    }
  });

}

server.listen({port: 8080}, function() {
  address = server.address();
  console.log("opened server on %j", address);
});

function header(date, data) {
  return ("HTTP/1.1 200 OK\n" +
    "Server : servername\n" +
    "Date : " + date +"\n" +
    "Content-Type : text/css; charset=UTF-8\n" +
    "Content-Length : " + data.length + "\n" +
    "Connection : keep-alive\n\n"
  );
}