var net = require('net');

var Server = net.connect({host: 'localhost', port: 6969}, function() {
  process.stdin.setEncoding('utf-8');
  Server.setEncoding('utf-8');

  var user = "you";

  // process.stdout.write(user + ": ");
  process.stdin.on('data', function(data) {
    // console.log(user+ '\r');
    Server.write(data);
  });

  Server.on('data', function(data) {
    process.stdout.write(data);
  });
  Server.on('end', function() {
    console.log("Your session has ended");
  });
});