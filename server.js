var net = require('net');
var fs = require('fs');
var server = net.createServer(onConnect);
var date = new Date();

function onConnect(socket) {

  socket.on('data', function(buffer) {
    // something on socket, data response
    var bufferArray = buffer.toString().split(' ');
    var requestPage = bufferArray[1];
    var fileType = requestPage.split('.');
    fileType = fileType[fileType.length-1];

    request(socket, requestPage, fileType);
  });
  socket.on('end', function(){
    socket.end();
    console.log('server diconnect');
  });
}

function request(socket, requestPage, fileType) {
  if(requestPage === "/") {
    requestPage = '/index.html';
  }
  return fs.readFile('.'+requestPage, 'utf-8', function(err, data) {

    if (err) {
      requestPage = '/404.html';
      return fs.readFile('.'+requestPage, 'utf-8', function(err, data) {
      socket.write("HTTP/1.1 404 OK\n");
      socket.write("Server : servername\n");
      socket.write("Date : " + date +"\n");
      socket.write("Content-Length : " + data.length + "\n");
      socket.write("Connection : keep-alive\n\n");
      socket.write(data);
      });
    }

    socket.write("HTTP/1.1 200 OK\n");
    socket.write("Server : servername\n");
    socket.write("Date : " + date +"\n");

    if(fileType === 'html') {
      socket.write("Content-Type : text/html; charset=utf-8\n");
      } else if (fileType === 'css') {
      socket.write("Content-Type : text/css; charset=UTF-8\n");
    }

    socket.write("Content-Length : " + data.length + "\n");
    socket.write("Connection : keep-alive\n\n");
    socket.write(data);
  });

}

server.listen({port: 8080}, function() {
  address = server.address();
  console.log("opened server on %j", address);
});