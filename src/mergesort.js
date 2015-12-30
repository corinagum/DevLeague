var mergeModule = module.exports = (function () {
  return {
    mergeSort: function(array) {

      if (array.length <= 1) {
        return array;
      }

      var half = Math.floor(array.length/2);
      var left  = [];
      var right = [];

      for ( var i = 0; i <= half; i++ ) {
        left.push(array[i]);
      }

      for (var j = (half + 1); j < array.length; j++) {
        right.push(array[j]);

      }
        console.log(left);
        console.log(right);


        console.log("==================");
        console.log(left);
      //   right = this.mergeSort(right);

      return sorting(this.mergeSort(left), this.mergeSort(right));




      function sorting (a, b) {
        var sorted = [];
        // while(a.length >= 0 && b.length >= 0) {
        //   if (a[0] < b[0]) {
        //     sorted.push(a.shift(), b.shift());
        //   } else {
        //     sorted.push(b.shift(), a.shift());
        //   }
        //   console.log('sorted: ' + sorted);
          return sorted;
        }
    return array;
  }

  };

})();


// if array is longer than 0 or 1, return it - it is already sorted
// split array into roughly 1/2

// continue to split until first index is equal to last index