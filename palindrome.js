function palindromeNumberGenerator(num, steps) {
  steps = steps || 0;
  var obj = {};

  var arrayReverse = num.toString().split('').reverse().join('');

  if(num.toString() === arrayReverse) {
    obj.value = num;
    obj.steps = parseInt(steps);

    return (obj);
  } else {
    steps = parseInt(steps) + 1 ;
    var newNum = num + parseInt(arrayReverse);
    return palindromeNumberGenerator(newNum, steps);
  }
}

console.log(palindromeNumberGenerator(87));