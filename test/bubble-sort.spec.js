var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expec = chai.expect;
var bubble = require('../bubble-sort.js');

describe ('bubbleSort', function () {
  it('should be a function', function () {
    expect(bubbleSort).to.exist;
    expect(bubbleSort).to.be.a('function');

  });
});