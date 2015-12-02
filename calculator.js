/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(number) {
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

  var calculator = {
  };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  calculator.load = function(num){
    if (isANumber(num)) {
        total = num;
        return total;
      }
  };
  /**
   * Return the value of `total`
   * @return { Number }
   */

  calculator.getTotal = function(){
    return total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  calculator.add = function(num) {
    if (isANumber(num)) {
        total += num;
    }
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  calculator.subtract = function(num) {
 if (isANumber(num)) {
    total -= num;
  }
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  calculator.multiply = function(num) {
  if (isANumber(num)) {
    total *= num;
  }
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  calculator.divide = function(num) {
  if (isANumber(num)) {
    total /= num;
  }
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  calculator.recallMemory = function() {
  return memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  calculator.saveMemory = function() {
    memory = total;
  };

  /**
   * Clear the value stored at `memory`
   */
  calculator.clearMemory = function() {
    memory = 0;
  };
  /**
   * Validation
   */
   return calculator;
}