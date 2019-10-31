var bubbleModule = require("./bubble-sort.js");

var bubble = bubbleModule;
var array = [30,5,21,4,7,2,19,3,1,25,13,6,8,42];

for (var i = 0; i < array.length; i++) {

  var bubbleElement = $('<li>',{
    class: 'bs-element',
    id: "bb" + array[i],
    width: array[i]*1.25 + "%",
    text: array[i]
  });
  $('#bubble-sort').append(bubbleElement);
}
$("#bubble-button").click(function() {
  $("#bubble-sort").css('display', 'block');
});
$("#bubble-button").click(function() {
  bubble.bubbleSort(array);
});
// console.log(bubble.bubbleSort(array), 'Bubble Sort');

// === start creating DOM ===
// var bubbleVisual = document.getElementById("bubble-sort");

// for (var i = 0; i < array.length; i++) {
//   var element = document.createElement('li');
//   element.id = array[i];
//   element.innerHTML = array[i];
//   $(bubbleVisual).append(element);
// }



