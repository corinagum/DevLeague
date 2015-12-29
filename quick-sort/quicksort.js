
function quickSort (unsortedArray) {
var pivot = [];
var left = [];
var right = [];
  debugger;
  // Step 1: Pick an element, called a pivot, from the array
  pivot = unsortedArray.splice(0, 1);

  // Step 2: Reorder the array
  for (var i = 0; i < unsortedArray.length; i++) {
    if (unsortedArray[i] <= pivot[0]) {
      left.push(unsortedArray[i]);
    }
    else {
      right.push(unsortedArray[i]);
    }
  }

  //Step 3: Recursively apply the steps to the sub-array of elements
  if (left.length <= 1 && right.length <= 1) {
    var sortedArray = left.concat(pivot, right);
    console.log("sorted array: " + sortedArray);
    return sortedArray;
  }

  else if (left.length > 1) {
    console.log("left.length", left.length);
    quickSort(left);
  }

  else if (right.length > 1) {
    console.log("right.length", right.length);
    quickSort(right);
  }
}

module.exports = quickSort;
quickSort([3,2,1,4]);