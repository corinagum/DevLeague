var net = require('net');

var PORT = 8080;
// var HOST = process.argv[2];
var HOST = 'localhost';
var pathName = process.argv[3];
var fileType = pathName.split('.');
    fileType = fileType[fileType.length-1];

var client = net.connect({port:PORT}, function() {
  client.write("GET " + pathName + " HTTP/1.1\n");
  client.write("Host: " + HOST + "\n");
  client.write("Connection: keep-alive\n");
  client.write("Content-Type : text/" + fileType);
  client.write("Accept: text/html, application/json\n\n");
  // client.write('world!\r\n');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {

});

