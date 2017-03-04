/**
 * Created by Rohail Najam on 3/4/2017.
 */


const expect = require('chai').expect;
const InvalidTypeError = require('../errorHandling/invalidTypeError');
const genDjinn = require('../index');

describe('#Requiring Generator Djinn', function() {
  it('Should return a function', function() {
    expect(genDjinn).to.be.a.Function;
  });

  it('It should have 1 parameter', function() {
    expect(genDjinn.length).to.equal(1);
  });

});

describe('#Tesing Generator Djinn', function() {
  it('It should do take value other then a function', function() {
    let gDjinn      = genDjinn;
    let someString  = 'My String';
    let someNull  = null;
    let someNumber = 3;
    let stringTesting = function () {
      gDjinn(someString)
    };
    let numberTesting = function () {
      gDjinn(someNumber)
    };
    let nullTesting = function () {
      gDjinn(someNull)
    };
    expect(stringTesting).to.throw(InvalidTypeError);
    expect(nullTesting).to.throw(InvalidTypeError);
    expect(nullTesting).to.throw(InvalidTypeError);
  });

  it('It should return function upon function', function() {
    let gDjinn      = genDjinn;
    let someFunction = function () {};
    expect(gDjinn(someFunction)).to.to.be.function;
  });

  it('It should return function upon Generator function', function() {
    let gDjinn      = genDjinn;
    let someFunction = function* () {};
    expect(gDjinn(someFunction)).to.to.be.function;
  });

  it('It should return value upon Generator function execution', function() {
    let gDjinn      = genDjinn;
    let someFunction = function* () {let num =yield 2; return num};
    expect(gDjinn(someFunction)()).to.be.Number;
    expect(gDjinn(someFunction)()).to.equal(2);
  });


});