var chai = require('chai');
var expect = chai.expect;
chai.should ();

var sumSqrRoot = require('./../squareroot.js');


describe ( "sumSqrRoot", function () {
  it( 'should exist', function () {
    expect( sumSqrRoot ).to.exist;
    expect( sumSqrRoot ).to.be.a( 'function' );
  });

  it( 'should return a number', function () {
    var result = sumSqrRoot(4);

    expect ( result ).to.be.a('number');
    expect( result ).to.be.equal(6.14626436994);

    result = sumSqrRoot(5);

    result.should.be.a('number');
      result.should.equal(8.38233234744);

    result = sumSqrRoot(1);
    result.should.be.a('number');
    result.should.equal(1);

  });

  it( 'should throw an error if argument is not a number', function (  ) {
    var boundFn = sumSqrRoot.bind( null, '3' );

    expect ( boundFn ).to.throw(TypeError, 'Please give me a number');

    boundFn = sumSqrRoot.bind( null, [] );

    expect ( boundFn ).to.throw(TypeError, 'Please give me a number');

    boundFn = sumSqrRoot.bind( null,{key: 'value'} );

    expect ( boundFn ).to.throw(TypeError, 'Please give me a number');
  });

} );