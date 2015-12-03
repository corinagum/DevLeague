exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var i = 2;
  while(i<= n) {
    if(isDivisible(n,i)) {

      if(isPrime(i)) {

      console.log(i);
      primeNumber = i;
     }
    }
    i++;
  }

  return primeNumber;
};


function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if(value%i === 0) {
      return false;
    }
    else {
      return value > 1;
    }
  }
}

function isDivisible(n,divider) {
  if(n % divider === 0) {
    return true;
  }
  else {
    return false;
  }
}


// function largestPrime(n) {
//   var i = 2;
//   while(i <= n) { //why does it have to be less than OR EQUAL TO?
//     if(n%i === 0) {
//       n /= i; //??
//       if(isPrime(i)) {
//         primeNumber = i;
//       }
//     }
//     else {
//       i++;
//     }
//   }
//   return primeNumber;
// }

// primeNumber = largestPrime(n);