window.onload = function() {

  function clearDisplay() {
    if (containerDisplay.innerHTML === "0") {
    containerDisplay.innerHTML = "";
     }
    else if (containerDisplay.innerHTML === "+") {
    containerDisplay.innerHTML = "";
     }
    else if (containerDisplay.innerHTML === "-") {
    containerDisplay.innerHTML = "";
     }
    else if (containerDisplay.innerHTML === "x") {
    containerDisplay.innerHTML = "";
     }
    else if (containerDisplay.innerHTML === "/") {
    containerDisplay.innerHTML = "";
     }
  }
  function loadingCalculator(number) {
    Calculator.load(number);
    arrayPush = [];
  }
  var arrayPush = [];
  // var inputNumber = arrayPush.join("");
  var theMath = "";
  var pushed = "";
  var buttonOne = document.getElementById("one");
  var buttonTwo = document.getElementById("two");
  var buttonThree = document.getElementById("three");
  var buttonFour = document.getElementById("four");
  var buttonFive = document.getElementById("five");
  var buttonSix = document.getElementById("six");
  var buttonSeven = document.getElementById("seven");
  var buttonEight = document.getElementById("eight");
  var buttonNine = document.getElementById("nine");
  var buttonZero = document.getElementById("zero");
  var buttonDoubleZero = document.getElementById("double-zero");

  var buttonDeci = document.getElementById("dot");
  var buttonPlus = document.getElementById("plus");
  var buttonMinus = document.getElementById("minus");
  var buttonMult = document.getElementById("times");
  var buttonDivide = document.getElementById("divided");
  var buttonEqual = document.getElementById("equals");
  var containerDisplay = document.getElementById("display");
  var buttonClear = document.getElementById("clear");


  buttonOne.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "1";
    arrayPush.push(1);
  });
  buttonTwo.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "2";
    arrayPush.push(2);
  });
  buttonThree.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "3";
    arrayPush.push(3);
  });
  buttonFour.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "4";
    arrayPush.push(4);

  });
  buttonFive.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "5";
    arrayPush.push(5);
  });
  buttonSix.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "6";
    arrayPush.push(6);
  });
  buttonSeven.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "7";
    arrayPush.push(7);
  });
  buttonEight.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "8";
    arrayPush.push(8);
  });
  buttonNine.addEventListener("click", function() {
    clearDisplay();
    containerDisplay.innerHTML += "9";
    arrayPush.push(9);
  });
  buttonZero.addEventListener("click", function() {
    containerDisplay.innerHTML += "0";
    arrayPush.push(0);
  });
  buttonDoubleZero.addEventListener("click", function() {
    containerDisplay.innerHTML += "00";
    arrayPush.push(0);
    arrayPush.push(0);
  });
  buttonDeci.addEventListener("click", function() {
    containerDisplay.innerHTML += ".";
    arrayPush.push('.');
  });
  buttonPlus.addEventListener("click", function() {
    containerDisplay.innerHTML = "+";
    pushed = arrayPush.join('');
    loadingCalculator(parseInt(pushed));
    theMath = "add";
  });
  buttonMinus.addEventListener("click", function() {
    containerDisplay.innerHTML = "-";
    pushed = arrayPush.join('');
    loadingCalculator(parseInt(pushed));
    theMath = "minus";
  });
  buttonMult.addEventListener("click", function() {
    containerDisplay.innerHTML = "x";
    pushed = arrayPush.join('');
    loadingCalculator(parseInt(pushed));
    theMath = "times";
  });
  buttonDivide.addEventListener("click", function() {
    containerDisplay.innerHTML = "/";
    pushed = arrayPush.join('');
    loadingCalculator(parseInt(pushed));
    theMath = "divide";
  });
  buttonEqual.addEventListener("click", function() {
    pushed = arrayPush.join('');
    if(theMath === "add") {
      Calculator.add(parseInt(pushed));
    }
    else if(theMath === "minus") {
      Calculator.subtract(parseInt(pushed));
    }
    else if(theMath === "times") {
      Calculator.multiply(parseInt(pushed));
    }
    else if(theMath === "divide") {
      Calculator.divide(parseInt(pushed));
    }
    containerDisplay.innerHTML = Calculator.getTotal();
    Calculator.load(0);
  });
  buttonClear.addEventListener("click", function() {
    containerDisplay.innerHTML = "0";
    loadingCalculator(0);
  });
};