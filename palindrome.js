debugger;
function palindromeNumberGenerator(num) {
  num = num.toString();
  var numArray = num.split('');
  var arrayReverse = numArray;
  arrayReverse.reverse();
  // var plusArray = arrayReverse.concat(numArray);
  var steps = 0;
  var obj = {};

  if(numArray === arrayReverse) {
    obj.value = plusArray;
    obj.steps = steps;
    console.log(obj);
    return (obj);
  } else {
    var newNum = "";
    for(var i = 0; i <= plusArray.length; i++) {
      newNum += plusArray[i];
    }
    palindromeNumberGenerator(newNum);
  }
}

palindromeNumberGenerator(87);