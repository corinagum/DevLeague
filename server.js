var net = require('net');
var clientList = []; // list of clients signed on

var Server = net.createServer(function(clientSocket) {
  clientSocket.setEncoding('utf-8');
  clientSocket.name = clientSocket.remoteAddress + ":" + clientSocket.remotePort;
  clientSocket.write("Welcome to Network Broadcast News. Enter your username. " + '\n');


  // on data
  clientSocket.on('data', function(data){
    if(clientList.indexOf(clientSocket) === -1) {
      clientSocket.username = data.replace("\n", "");
      clientSocket.write("You are now signed on as " + clientSocket.username + '\n');
      broadcast("joined chat\n", clientSocket);
      clientList.push(clientSocket);
    } else {
    broadcast(data, clientSocket);
    // clientSocket.write(clientSocket.name + " wrote: " + data);
  }

  });

  // socket.on("end") actually works.
  clientSocket.on('end', function() {
    clientList.splice(clientList.indexOf(clientSocket), 1);
    broadcast("left the chat.", clientSocket); // says so and so left chat when connection ends
  });

  function broadcast(msg, clientSender) {
    clientList.forEach(function (clientSocket) {
      // if (clientSocket === clientSender) return;
      clientSocket.write(clientSender.username + ": " + msg);
    });

    // process.stdout.write(msg);
  }
});

Server.listen(6969, function() {
  console.log("Chatroom Server is online");
});