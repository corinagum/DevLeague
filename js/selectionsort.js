var selectionModule = module.exports = (function () {
  return {
    selectionSort: function (array) {
      for (var i = 0; i < array.length; i++) {

        for(var j = (i+1); j < array.length; j++) {

          if(array[j] < array[i]) {

            var bigger = array[i];
            var smaller = array[j];

            array[i] = smaller;
            array[j] = bigger;
          }
        }
      }
      return array;
    }
  };
})();