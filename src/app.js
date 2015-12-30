var bubbleModule = require("./bubble-sort.js");

var bubble = bubbleModule;
var array = [5,4,7,2,3,1,19];
console.log(bubble.bubbleSort(array), 'Bubble Sort');

// === start creating DOM ===
var bubbleVisual = document.getElementById("bubble-sort");

for (var i = 0; i < array.length; i++) {
  var element = document.createElement('li');
  element.id = array[i];
  element.innerHTML = array[i];
  $(bubbleVisual).append(element);
}