var bubbleModule = require("./bubble-sort.js");

var bubble = bubbleModule;
var array = [5,4,7,2,3,1,19];
console.log(bubble.bubbleSort(array), 'Bubble Sort');

// start creating DOM
var bubbleVisual = document.getElementById("bubble-sort");

var navigation = document.createElement('div');
  navigation.classList.add('navigation');
  $('.body').append(navigation);