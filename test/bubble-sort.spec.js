var chai = require('chai');
var mocha = require('mocha');
chai.should();
var expect = chai.expect;
var bubbleSort = require('../bubble-sort.js');

// describe ('bubbleSort', function () {
//   it('should be a function', function () {
//     expect(bubbleSort).to.exist;
//     expect(bubbleSort).to.be.a('function');
//   });

//   it('should deep equal array', function() {
//     expect(bubbleSort([3,2,1])).to.deep.equal([1,2,3]);
//     expect(bubbleSort([3,2,1,4,12,8,5])).to.deep.equal([1, 2, 3, 4, 5, 8, 12]);

//   });
// });