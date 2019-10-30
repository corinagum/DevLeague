/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

var numberToString = function (num) {
var n = '';
n = num.toString();
console.log(n);
return n;
};
numberToString(16);
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n) {
  var outputIncrease = n+1;
  return outputIncrease;
}
increase(7);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n) {
  var outputDecrease = n-1;
  return outputDecrease;
}
increase(7);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add (a,b) {
  var outputAdd = a + b;
  return outputAdd;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(a,b) {
  var outputSubtract = a-b;
  return outputSubtract;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(a,b) {
  var outputMultiply = a * b;
  return outputMultiply;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(a,b) {
  var outputDivide = a/b;
  return outputDivide;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(a) {
  var outputSquare = a*a;
  return outputSquare;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(m, a,b) {
  if (m ==='add') {
    var outPutA = a + b;
    console.log(a + " + " + b + " = " + outPutA);
    return(a+b);
  }
    if (m ==='subtract') {
    var outPutS = a - b;
    console.log(a + " - " + b + " = " + outPutS);
    return(a-b);
  }
    if (m ==='multiply') {
    var outPutM = a * b;
    console.log(a + " * " + b + " = " + outPutM);
    return(a*b);
  }
    if (m ==='divide') {
    var outPutD = a / b;
    console.log(a + " / " + b + " = " + outPutD);
    return(a/b);
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan (x,y) {
if (x > y) {
  return true;
}
else {
  return false;
}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan (x,y) {
if (x < y) {
  return true;
}
else {
  return false;
}

}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual (a,b) {
  if (a ===b) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum (a,b) {
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum (a,b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven (a) {
  if (a%2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd (a) {
  if (a%2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//NEED TO FIX
function letterGrade (a,b) {
  if (a/b >= 0.9) {
    return "A";
  }
  else  if (a/b >= 0.8 && a/b < 0.9) {
    return "B";
  }
  else  if (a/b >= 0.7 && a/b < 0.8) {
    return "C";
  }
  else  if (a/b >= 0.6 && a/b < 0.7) {
    return "D";
  }
  else  {
    return "F";
  }
}
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var awesomeEatery = {
  reviews: 1776
};
var newEatery = {
};
function incrementReviews(restaurant) {
  if (restaurant.hasOwnProperty('reviews')) {
    restaurant.reviews ++;
  }
  else {
    restaurant.reviews = 1;
  }
  return restaurant;
}
incrementReviews(awesomeEatery);
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(a,b) {
  return a + " " + b;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
var circle = {};
function createCircle (radius) {
  circle.radius = radius;
  circle.area = radius * radius * Math.PI;
  circle.circumference = Math.PI * radius * 2;
  return circle;
}