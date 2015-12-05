var Calculator = (function () {
  var calculator = {};

  var memory = 0;
  var total = 0;
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
  };
  calculator.getTotal = function(){
    return total;
  };


  calculator.add = function(num) {
    if (isANumber(num)) {
        total += num;
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
  }
  };


  calculator.recallMemory = function() {
  return memory;
  };


  calculator.saveMemory = function() {
    memory = total;
  };


  calculator.clearMemory = function() {
    memory = 0;
  };

 return calculator;
})();