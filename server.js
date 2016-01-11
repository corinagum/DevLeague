var net = require('net');
var clientList = []; // list of clients signed on

// counts as client.connect; establishes server. clientSocket is individual user connection
var Server = net.createServer(function(clientSocket) {
  clientSocket.setEncoding('utf-8');
  clientSocket.write("[ADMIN] Welcome to Network Broadcast News. Enter your username. ");
  // on data. first if statement handles sit. if user is not among clientList - gets username
  clientSocket.on('data', function(data){

    if(clientList.indexOf(clientSocket) === -1) {
      clientSocket.username = data.replace("\n", "");
      clientSocket.write("[ADMIN] You are now signed on as " + clientSocket.username);
      broadcast("joined chat ", clientSocket);
      clientList.push(clientSocket);
    } else {
    broadcast(data, clientSocket);
    // clientSocket.write(clientSocket.name + " wrote: " + data);
  }
  // ADMIN MESSAGES
  });

  // socket.on("end") actually works.
  clientSocket.on('end', function() {
    clientList.splice(clientList.indexOf(clientSocket), 1);
    broadcast("left the chat.", clientSocket); // says so and so left chat when connection ends
  });

  function broadcast(msg, clientSender) {
    clientList.forEach(function (clientSocket) {
      if (clientSocket === clientSender) return;
      clientSocket.write("\r" + clientSender.username + ": " + msg);
    });

    process.stdout.write(clientSender.username + ": " + msg + '\n');
  }
});

Server.listen(6969, function() {
  console.log("[ADMIN] Chatroom Server is online");
});