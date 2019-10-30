module.exports = SmartPhone;
var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  Tablet.call(this);
  GameConsole.call(this, "Smart Phone");
  WebBrowser.call(this);
}

