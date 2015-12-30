// 'use strict';
var selectionModule = module.exports = (function () {
  return {
    selectionSort: function (array) {
      for (var i = 0; i < array.length; i++) {
        var min = array[i];
        for(var j = (i+1); j < (array.length-1); j++) {
          if ( array[j] < array[min]) {
            min = array[j];
          }
        }

        if(array[min] !== j) {
          var bigger = array[j];
          var smaller = array[min];

          array[j] = smaller;
          array[min] = bigger;
        }
      }
      return array;
    }
  };
})();