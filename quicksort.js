var quickSort = module.exports = (function () {
  return {
    quicksort: function(unsortedArray) {
      var left = [];
      var right = [];

      for (var i = 1; i < unsortedArray.length; i++) {
        if (unsortedArray[i] <= unsortedArray[0]) {
          left.push(unsortedArray[i]);
        }
        else {
          right.push(unsortedArray[i]);
        }
      }

      //Recursively apply the steps to the sub-array of elements
      if (unsortedArray.length <= 1) {
        return unsortedArray;
      }
      else {
        return quickSort(left).concat(unsortedArray[0], quickSort(right));
      }
    }
  };
})();

// console.log(quickSort([3,2,1,4]));
// console.log(quickSort([4,6,1,8,5,19,7]));
// console.log(quickSort([1,3,2,4]));