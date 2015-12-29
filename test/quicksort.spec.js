var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var quickSort = require('./../quicksort.js');

describe ('quickSort', function () {
  it('should be a function', function () {
    expect(quickSort.quicksort).to.exist;
    expect(quickSort.quicksort).to.be.a('function');
  });

  it('should deep equal array', function() {
    expect(quickSort.quicksort([3,2,1,5,4])).to.deep.equal([1,2,3,4,5]);
  });
});