var net = require('net');
var clientList = []; // list of clients signed on
var admin = {};
admin.username = '[ADMIN]';
// counts as client.connect; establishes server. clientSocket is individual user connection
var Server = net.createServer(function(clientSocket) {
  process.stdin.setEncoding('utf-8');
  process.stdout.write("[ADMIN]: ");
  clientSocket.setEncoding('utf-8');
  clientSocket.write("[ADMIN]: Welcome to Network Broadcast News. Enter your username. ");
  // on data. first if statement handles situation if user is not among clientList - gets username

  clientSocket.on('data', function(data){
    if(clientList.indexOf(clientSocket) === -1) {
      clientSocket.username = data.replace("\n", "");
      clientSocket.write("[ADMIN]: You are now signed on as " + clientSocket.username);
      broadcast("joined chat ", clientSocket);
      clientList.push(clientSocket);
    } else {
    broadcast(data, clientSocket);
  }
  });

// ADMIN MESSAGES
process.stdin.on('data', function(data) {
  if(data.indexOf("\kick") !== -1) {
    var kicking = data.replace("\\kick ", "");
    kicking = kicking.replace('\n', "");
    clientList.forEach(function(clientSocket) {
      if(clientSocket.username === kicking) {
        clientSocket.write("You have been kicked by [ADMIN]");
        clientSocket.end();
        broadcast("kicked from the chat.", clientSocket);
        clientList.splice(clientList.indexOf(clientSocket, 1));
      }
    });

  } else {
    broadcast(data.trim(), admin);
  }
});

  // socket.on("end") actually works.
  clientSocket.on('end', function() {
    clientList.splice(clientList.indexOf(clientSocket), 1);
    broadcast("left the chat.", clientSocket); // says so and so left chat when connection ends
  });

});


Server.listen(6969, function() {
  console.log("[ADMIN]: Chatroom Server is online");
});

function broadcast(msg, clientSender) {
  clientList.forEach(function (clientSocket) {
    if (clientSocket === clientSender) return;
    clientSocket.write("\r" + clientSender.username + ": " + msg);
  });
  if(clientSender === admin) return;
  process.stdout.write(clientSender.username + ": " + msg + '\n');
}