module.exports = NintendoDS;
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function NintendoDS() {
  GameConsole.call(this, "Nintendo DS");
  WebBrowser.call(this);
}
