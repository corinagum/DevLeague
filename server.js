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

// username validation
  clientSocket.on('data', function(data){
    if(clientList.indexOf(clientSocket) === -1) {
      if(data === "[ADMIN]" || data === 'admin' || data === "ADMIN") {
        return clientSocket.write("Invalid username. Try another");
      }
     var username = data.replace("\n", "");
      if(clientList.length === 0) {
        clientSocket.username = username;
        clientSocket.write("[ADMIN]: You are now signed on as " + username);
        clientList.push(clientSocket);
        return announce("joined the chat ", username);
      } else {
        clientList.every(function(client) {
          if(username === client.username) {
            return clientSocket.write(data + " is already taken. Choose another username");
          } else {
            clientSocket.username = username;
            clientSocket.write("[ADMIN]: You are now signed on as " + clientSocket.username);
            clientList.push(clientSocket);
            return announce("joined the chat ", username);
          }
        });
      }
    } else {
    broadcast(data, clientSocket);
  }
  });


  // Closes socket
  clientSocket.on('end', function() {
    clientList.splice(clientList.indexOf(clientSocket), 1);
    announce("left the chat.", clientSocket.username); // says so and so left chat when connection ends
  });

});

// ADMIN CAPABILITIES
process.stdin.on('data', function(data) {
  if(data.indexOf("\kick") !== -1) {
    var kicking = data.replace("\\kick ", "");
    kicking = kicking.replace('\n', "");
    clientList.forEach(function(clientSocket) {

      if(clientSocket.username === kicking) {
        clientSocket.write("You have been kicked by [ADMIN]");
        clientSocket.end();
      }

    });

  } else {
    data = data.toString();
    var trimmedData = data.trim();
    broadcast(trimmedData, admin); // writes what admin says
  }
}); // end admin capabilities

Server.listen(6969, function() {
  process.stdout.write("[ADMIN]: Chatroom Server is online\n[ADMIN]: ");
});

function broadcast(msg, clientSender) {
  clientList.forEach(function (clientSocket) {
    if (clientSocket === clientSender) return;
    clientSocket.write("\r" + clientSender.username + ": " + msg);
  });
  if(clientSender === admin) return;
  process.stdout.write(clientSender.username + ": " + msg + '\n');
}
function announce(msg, username) {
  clientList.forEach(function (clientSocket) {
    clientSocket.write("\r" + username + " " + msg);
  });
  if(username === admin) return;
  process.stdout.write(username + " " + msg + '\n');
}