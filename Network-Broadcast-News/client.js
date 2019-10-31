var net = require('net');

var Server = net.connect({host: 'localhost', port: 6969}, function() {
  process.stdin.setEncoding('utf-8');
  Server.setEncoding('utf-8');

  process.stdin.on('data', function(data) {
    Server.write(data.trim());
    process.stdout.write("you: ");
  });

  Server.on('data', function(data) {
    process.stdout.write('\r' + data + '\nyou: ');
  });

  // if there is a disconnect:
  Server.on('end', function() {
    console.log("Your session has ended");
  });
});