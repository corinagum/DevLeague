var Net = require('net');
var Server = Net.createServer(function(client) {
  client.write("Welcome to Network Broadcast News");
  var body = ''; // do I need this really?
  client.setEncoding('utf-8');

  client.on('data', function(data){
    body += data;
    process.stdout.write("client wrote: " + data);

  });
  client.on('end', function() {
      var data = JSON.parse(body);
      client.write(data);

  });
});

Server.listen(6969, function() {
  console.log("Server is online");
});