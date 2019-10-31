var bubbleModule = module.exports = (function () {
  return {
    bubbleSort: function (array) {

      // var bubbleVisual = document.getElementById("bubble-sort");
      // console.log(bubbleElements);
      var switching = true;
      var i = 0;
      var switchCount = 0;

      while( switching ) {
        switching = false;

        var interval = setInterval( function() {
          if(i === array.length) {
            i = 0;
            if(switchCount === 0) {
              clearInterval(interval);
            }
          }
          var bubbleElements = $('.bs-element');
          if( array[i] > array[i+1] ) {
            var bigger = array[i];
            var smaller = array[i+1];

            var biggerEl = $(bubbleElements[i]);
            var smallerEl = $(bubbleElements[i+1]).detach();
            // smallerEl.css("background-color", 'green');

            array[i] = smaller;
            array[i+1] = bigger;

            $(biggerEl).before(smallerEl);
            switching = true;
            switchCount++;
        }
        i++;
      }, 500);
      }
      // console.log(bubbleElements);
      return array;
    }
  };
})();

// Array.prototype.bubbleModule = bubbleSort;
