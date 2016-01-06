var net = require('net');
var stream = require('stream');

var argsArray = [];
process.argv.forEach(function(val) {
  argsArray.push(val);
});
var argsString = argsArray.join(' ');

getRequestMethod(argsString);


var url = process.argv[3] || process.argv[2];

if (url === undefined) {
  console.log('USE NODE CLIENT.JS \n' +
  'To view manual, run "node client.js" in the terminal\n' +
  'To access local host, run "node client.js localhost" in the terminal\n' +
  'To access external server, run "node client.js <hostname/pathname>" in the terminal\n' +
  'e.g.: "node client.js www.google.com/search"\n' +
  ' \n' +
  '"-post" will change request method from GET to POST\n' +
  '"-head" will change request method from GET to HEAD, and will retrieve header only\n' +
  '"-put" will change request method from GET to PUT\n' +
  '"-delete" will change request method from GET to DELETE\n' +
  '"-options" will change request method from GET to OPTIONS\n\n');
  return;
}

url = url + '/'; // handles case for if user does not enter any /
urlSplit = url.split('/');

var HOST = urlSplit[0];

var pathName = ('/' + urlSplit[1]);
if (pathName === '/undefined') { //if user provides no edge case
  var pathName = '/index.html';
}

var PORT = 8080;
if(HOST !== 'localhost') {
  PORT = 80;
}
PORT = findPort(argsString, PORT);

var fileType = pathName.split('.');
    fileType = fileType[fileType.length-1];
  // console.log(url, HOST, pathName + " " + PORT);
// END DEFINITIONS
console.log(PORT);
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


// start helper methods
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

function getRequestMethod(argsString) {
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
  return requestMethod;
}

function findPort(argsString, PORT) {
  if(/(-)port:[0-9]*/.test(argsString)) {
    var portNumber = argsString.match(/-port:([0-9])*/);
    PORT = portNumber[0].substring(portNumber[0].indexOf(':')+1);
    return PORT;
  }
}


// fs module blahhhhhhhhh