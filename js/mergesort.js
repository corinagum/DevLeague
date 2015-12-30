var mergeModule = module.exports = (function () {
  return {
    mergeSort: function (array) {
      while(array.length > 1) {
        var half = Math.floor(array.length/2);
          var left  = [];
          var right = [];
        for ( var i = 0; i <= half; i++ ) {
          left.push(array[i]);
        }

        for (var j = (half + 1); j < array.length; j++) {
          right.push(array[j]);

        }
          console.log("left side: " + left);
          console.log("right side: " + right);
        return mergeSort(left).concat(mergeSort(right));
      }


      return array;
    }
  };
})();


// if array is longer than 0 or 1, return it - it is already sorted
// split array into roughly 1/2

// continue to split until first index is equal to last index