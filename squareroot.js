module.exports = sumSqrRoot;


  function sumSqrRoot (num) {
  var sum = 0;
     if  (typeof num !== 'number')  {
    throw new TypeError ( 'Please give me a number' );
    }

    for(var i = 1; i <= num; i++) {
      var sq = Math.sqrt(i);
      sum += sq;
    }
    console.log(sum);
    return sum;
  }



sumSqrRoot(9);


