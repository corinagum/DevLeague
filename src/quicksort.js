var quickSort = module.exports = (function () {
  return {
    quicksort: function(array) {
      var left = [];
      var right = [];

      for (var i = 1; i < array.length; i++) {
        if (array[i] <= array[0]) {
          left.push(array[i]);
        }
        else {
          right.push(array[i]);
        }
      }

      //Recursively apply the steps to the sub-array of elements
      if (array.length <= 1) {
        return array;
      }
      else {
        return this.quicksort(left).concat(array[0], this.quicksort(right));
      }
    }
  };
})();

// console.log(quickSort([3,2,1,4]));
// console.log(quickSort([4,6,1,8,5,19,7]));
// console.log(quickSort([1,3,2,4]));