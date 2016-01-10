var net = require('net');
var clientList = [];

var Server = net.createServer(function(clientSocket) {

  clientSocket.name = clientSocket.remoteAddress + ":" + clientSocket.remotePort;
  clientList.push(clientSocket);
  clientSocket.write("Welcome to Network Broadcast News, " + clientSocket.name);
  broadcast(clientSocket.name + " joined chat\n", clientSocket);

  var body = ''; // do I need this really?
  clientSocket.setEncoding('utf-8');
  clientSocket.on('data', function(data){
    body += data;
    broadcast(clientSocket.name + " wrote: " + data);
    // clientSocket.write(clientSocket.name + " wrote: " + data);

  });
  clientSocket.on('end', function() {
    clientList.splice(clientList.indexOf(clientSocket), 1);
    broadcast(clientSocket.name + " left the chat.\n");

  });

  function broadcast(msg, clientSender) {
    clientList.forEach(function (clientSocket) {
      if (clientSocket === clientSender) return;
      // clientSocket.write(msg);
      // broadcast(clientSocket.name + ": " + msg);
    });

    process.stdout.write(msg);
  }
});

Server.listen(6969, function() {
  console.log("Chatroom Server is online");
});