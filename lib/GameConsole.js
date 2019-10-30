module.exports = GameConsole;
function GameConsole(systemName) {
  this.systemName = systemName;

  this.play = function(game) {
    return(this.systemName + ' plays ' + game.title);

  };
}