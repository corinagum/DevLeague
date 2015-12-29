var bubbleModule = module.exports = (function () {

  return {
    bubbleSort: function (array) {
    var switching = true;

      while( switching ) {
        switching = false;

        for ( var i = 0; i < array.length; i++ ) {

          if( array[i] > array[i+1] ) {
            var bigger = array[i];
            var smaller = array[i+1];

            array[i] = smaller;
            array[i+1] = bigger;

          }
          switching = true;
        }
        console.log(array);
        return array;
      }
    }
  };

})();

// Array.prototype.bubbleModule = bubbleSort;