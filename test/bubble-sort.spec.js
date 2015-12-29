var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var bubbleModule = require('./../js/bubble-sort.js');

describe ('bubbleModule', function () {
  it('should be a function', function () {
    expect(bubbleModule.bubbleSort).to.exist;
    expect(bubbleModule.bubbleSort).to.be.a('function');
  });

  it('should deep equal array', function() {
    expect(bubbleModule.bubbleSort([3,2,1])).to.deep.equal([1,2,3]);
    expect(bubbleModule.bubbleSort([3,2,1,4,12,8,5])).to.deep.equal([1, 2, 3, 4, 5, 8, 12]);

  });
});