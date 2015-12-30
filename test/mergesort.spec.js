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
});