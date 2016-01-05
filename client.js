var net = require('net');

var PORT = 80;
var uri = process.argv[2];
  uri = uri.split('/');

var HOST = uri[0] || localhost;
var pathName = ('/' + uri[1]) || '/';
var fileType = pathName.split('.');
    fileType = fileType[fileType.length-1];
    console.log(uri, fileType);
var client = net.connect({
    port:PORT,
    host: HOST},
    function() {
  // console.log(uri, HOST, pathName);
  client.write("GET " + pathName + " HTTP/1.1\n");
  client.write("Host: " + HOST + "\n");
  client.write("Connection: keep-alive\n");
  client.write("Content-Type : text/" + fileType);
  client.write("Accept: text/html, application/json\n\n");
  // client.write('world!\r\n');
  client.on('data', function(data) {
    console.log(data.toString());
  });
});

client.on('end', function() {
  client.end();
});

