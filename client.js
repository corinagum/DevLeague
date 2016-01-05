var net = require('net');

var uri = process.argv[2];

if (uri === undefined) {
  console.log('USE NODE CLIENT.JS');
  console.log('To view manual, run "node client.js" in the terminal');
  console.log('To access local host, run "node client.js localhost" in the terminal');
  console.log('To access external server, run "node client.js <hostname/pathname>" in the terminal');
  console.log('e.g.: "node client.js www.google.com/search"');
  return;
}

uri = uri + '/';
uri = uri.split('/');
var HOST = uri[0];

var pathName = ('/' + uri[1]);
if (pathName === '/undefined') {
  var pathName = '/';
}

var PORT = 8080;
if(HOST !== 'localhost') {
  PORT = 80;
}

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
  console.log('client disconnect');
});