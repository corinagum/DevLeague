var Calculator = (function () {
  var calculator = {};

  var memory = 0;
  var total = 0;
  var cashRegister = 0;
  function isANumber(num) {
    if (Number.isInteger(num)) {
        return true;
      }
    else {
      throw (new Error("Enter a number!"));
    }
  }
  calculator.load = function(num){
    if (isANumber(num)) {
        total = num;
        return total;
      }
        console.log(total);
  };
  calculator.getTotal = function(){
    return total;
  };


  calculator.add = function(num) {
    if (isANumber(num)) {
        total += num;
        console.log(total);
    }
  };


  calculator.subtract = function(num) {
 if (isANumber(num)) {
    total -= num;
  }
  };


  calculator.multiply = function(num) {
  if (isANumber(num)) {
    total *= num;
  }
  };


  calculator.divide = function(num) {
  if (isANumber(num)) {
    total /= num;
    console.log(total);
  }
  };


  calculator.recallMemory = function() {
  return memory;
  };


  calculator.depositMemory = function(num) {
    memory += num;
  };

  calculator.withdrawMemory = function(num) {
    memory -= num;
  };


  calculator.clearMemory = function() {
    memory = 0;
  };

 return calculator;
})();