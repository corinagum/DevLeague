var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
function datafiltering (element) {
  return (element.amount > 100000);
}
var hundredThousandairs = dataset.bankBalances.filter(datafiltering);


/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
function roundingDollars (element) {
  return { amount: element.amount, state: element.state, rounded: Math.round(element.amount)};
}
var roundedDollar = dataset.bankBalances.map(roundingDollars);

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
function roundingDimes (element) {
  var toDimes = Number((Number(element.amount)).toFixed(1));
  return { amount: toDimes, state: element.state};
}
var roundedDime = dataset.bankBalances.map(roundingDimes);


// set sumOfBankBalances to the sum of all amounts in bankBalances
function summingBalances (prev, current) {
  return prev + parseFloat(Number(current.amount).toFixed(2));
}
var returnSum = dataset.bankBalances.reduce(summingBalances, 0);
var sumOfBankBalances = Number(Number(returnSum).toFixed(2));


/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
 function stateFiltering (element) {
  if (element.state === "WI" ||
      element.state === "IL" ||
      element.state === "WY" ||
      element.state === "OH" ||
      element.state === "GA" ||
      element.state === "DE") {
    return true;
  }
 }
var statesCalcInterest = dataset.bankBalances.filter(stateFiltering);
statesCalcInterest = statesCalcInterest.map( function (element) {
  return element.amount;
});
var sumOfInterests = statesCalcInterest.reduce(function (prev, current) {
  return (prev + Math.round(Number(current)*0.189*100)/100);
}, 0);
sumOfInterests = Number(sumOfInterests.toFixed(2));
/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
function stateHighFiltering (element) {
  if (element.state !== "WI" &&
      element.state !== "IL" &&
      element.state !== "WY" &&
      element.state !== "OH" &&
      element.state !== "GA" &&
      element.state !== "DE") {
    return true;
  }
 }
var statesHighInterest = dataset.bankBalances.filter(stateHighFiltering);
var statesObject = {};

statesHighInterest.map(function(element) {
  if(!statesObject[element.state]) {
    statesObject[element.state] = ((element.amount*0.189*100)/100);
  } else {
    statesObject[element.state] += ((element.amount*0.189*100)/100);
  }
});

var statesArray = [];
for (var key in statesObject) {
  if(statesObject[key] > 50000) {
    statesArray.push(statesObject[key]);
  }
}
sumOfHighInterests = statesArray.reduce(function(prev, current){
  return prev + parseFloat(current.toFixed(2));
},0);
sumOfHighInterests = (Math.round(sumOfHighInterests*100))/100;


/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};