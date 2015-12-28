var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var bubbleSort = require('../bubble-sort.js');

describe ('bubbleSort', function () {
  it('should be a function', function () {
    expect(bubbleSort).to.exist;
    expect(bubbleSort).to.be.a('function');
  });
});