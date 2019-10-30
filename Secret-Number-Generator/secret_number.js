module.exports = function() {
  'use strict';
  var number = (Math.random()*1000000) + 1;
  if (number >= 1000000) {
    number = 1000000;
  }

  return function() {
    return number;
  };


};