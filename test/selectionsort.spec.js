var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var selectionModule = require('./../js/selectionsort.js');

describe ('selectionModule', function () {
  it('should be a function', function() {
    expect(selectionModule.selectionSort).to.exist;
    expect(selectionModule.selectionSort).to.be.a('function');
  });

  it('should deep equal array', function() {
    expect(selectionModule.selectionSort([3,2,1])).to.deep.equal([1,2,3]);
    expect(selectionModule.selectionSort([3,2,1,4,12,8,5])).to.deep.equal([1, 2, 3, 4, 5, 8, 12]);
  });
});