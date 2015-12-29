function quickSort (unsortedArray) {
  var left = [];
  var right = [];

  // Step 1: Pick an element, called a pivot, from the array

  // Step 2: Reorder the array
  for (var i = 1; i < unsortedArray.length; i++) {
    if (unsortedArray[i] <= unsortedArray[0]) {
      left.push(unsortedArray[i]);
    }
    else {
      right.push(unsortedArray[i]);
    }
  }

  //Step 3: Recursively apply the steps to the sub-array of elements
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  else {
    return quickSort(left).concat(unsortedArray[0], quickSort(right));
  }
}

module.exports = quickSort;
// console.log(quickSort([3,2,1,4]));
// console.log(quickSort([4,6,1,8,5,19,7]));
// console.log(quickSort([1,3,2,4]));