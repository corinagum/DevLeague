/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : highestFibonacciNumber
};

var fibSeq = [0,1];
var i = fibSeq[0];
var j = fibSeq[i + 1];

for (var h = 0; h <= 100; h++) {
  fibSeq.push(fibSeq[i] + fibSeq[j]);
  i++;
  j++;
}

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var i = 0;
  while(fibSeq[i] <= maxFibValue) {

    if(fibSeq[i]%2 === 0) {
      sum += fibSeq[i];
    }
    i++;
  }

  return sum;
}

// bonus round
function highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var i = 0;

 while (fibSeq[i] <= maxFibValue) {
  highest = fibSeq[i];
  i++;
  console.log(fibSeq[i]);
 }

  return highest;
}