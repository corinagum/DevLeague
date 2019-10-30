module.exports = function() {
  'use strict';
  var myVault = {};

  return {
    setValue: function(key, value) {
      myVault[key] = value;
    },
    getValue: function(key) {
      if (!myVault[key]) {
        return null;
      }
      return myVault[key];
    }
  };
};