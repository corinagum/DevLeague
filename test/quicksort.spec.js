var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var quickSort = require('../quick-sort/quicksort.js');

describe ('quickSort', function () {
  it('should be a function', function () {
    expect(quickSort).to.exist;
    expect(quickSort).to.be.a('function');
  });

  it('should deep equal array', function() {
    expect(quickSort([3,2,1,5,4])).to.deep.equal([1,2,3,4,5]);
  });
});