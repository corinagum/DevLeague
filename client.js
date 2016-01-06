var net = require('net');
var stream = require('stream');

var argsArray = [];
process.argv.forEach(function(val) {
  argsArray.push(val);
});
var argsString = argsArray.join(' ');
console.log(argsString);

if(/(-)post/.test(argsString)) {
  requestMethod = 'POST';
} else if(/(-)get/.test(argsString)) {
  requestMethod = 'GET';
} else if(/(-)put/.test(argsString)) {
  requestMethod = 'PUT';
} else if(/(-)delete/.test(argsString)) {
  requestMethod = 'DELETE';
} else if(/(-)head/.test(argsString)) {
  requestMethod = 'HEAD';
} else if(/(-)options/.test(argsString)) {
  requestMethod = 'OPTIONS';
} else {
  requestMethod = 'GET';
}

var uri = process.argv[2];

if (uri === undefined) {
  console.log('USE NODE CLIENT.JS');
  console.log('To view manual, run "node client.js" in the terminal');
  console.log('To access local host, run "node client.js localhost" in the terminal');
  console.log('To access external server, run "node client.js <hostname/pathname>" in the terminal');
  console.log('e.g.: "node client.js www.google.com/search"');
  console.log(' ');
  console.log('"-post" listed after the url will change request method from GET to POST');
  return;
}

uri = uri + '/';
uri = uri.split('/');



var HOST = uri[0];

var pathName = ('/' + uri[1]);
if (pathName === '/undefined') {
  var pathName = '/index.html';
}

var PORT = 8080;
if(HOST !== 'localhost') {
  PORT = 80;
}

var fileType = pathName.split('.');
    fileType = fileType[fileType.length-1];
  // console.log(uri, HOST, pathName + " " + PORT);
// END DEFINITIONS

// start client net connect
var client = net.connect({
    'port':PORT,
    'host': HOST
  },
    function() {
      client.write(requestMethod + " " + pathName + " HTTP/1.1\n" +
      "Host: " + HOST + "\n" +
      "Connection: keep-alive\n" +
      "Content-Type : text/" + fileType + "\n" +
      "User-Agent: clientname\n" +
      "Accept: text/html, application/json\n\n");
});

client.on('data', function(data) {
  console.log(data.toString());
  // console.log(writeHash(data).hashTable); // runs writeHash
     // client.pipe(process.stdout);
  client.end();
});

client.on('end', function() {
  console.log('client disconnect');
});

function writeHash(data) {
  var hashTable = []; // to hold all recorded headers
  var hash = {}; // holds one header, to be pushed into hashTable
  var header = data.toString().split('<');
  var headerSplit = header[0].split('\n');
  for(var i = 0; i < headerSplit.length; i++) {
    if (i === 0) {
      hash.get = headerSplit[i];
    } else {
    var tempSplit = headerSplit[i].split(' : ');
    hash[tempSplit[0]] = tempSplit[1];
    }
  }
  hashTable.push(hash);
  return {
    hashTable: hashTable
  };
}