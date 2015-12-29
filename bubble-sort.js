function bubbleSort (unsortedArray) {
  var switching = false;

  while(!switching) {
    switching = true;

    for ( var i = 0; i < this.length; i++ ) {

      if(this[i] > this[i+1]) {
        var bigger = this[i];
        var smaller = this[i+1];

        this[i] = smaller;
        this[i+1] = bigger;

        switching = false;
      }
    }
  }
  return this;
}

Array.prototype.bubbleSort = bubbleSort;

console.log([2,1,3].bubbleSort());




module.exports = bubbleSort;