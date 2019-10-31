var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var mergeModule = require('./../js/mergesort.js');

describe ('mergeModule', function () {
  it('should be a function', function () {
    expect(mergeModule.mergeSort).to.exist;
    expect(mergeModule.mergeSort).to.be.a('function');
  });

  it('should deep equal array', function() {
    expect(mergeModule.mergeSort([3,2,1])).to.deep.equal([1,2,3]);
    // expect(mergeModule.mergeSort([3,2,1,4,12,8,5])).to.deep.equal([1, 2, 3, 4, 5, 8, 12]);
  });
});