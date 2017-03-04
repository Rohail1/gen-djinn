/**
 * Created by Rohail Najam on 2/10/2017.
 */


'use strict';

const InvalidTypeError = require('./errorHandling/invalidTypeError');

/**
 *  Executes the generator function and returns the value
 * @param {generatorfunction} generator
 * @param {Object} yieldValue
 * @return {Object} result
 */



function executer(generator, yeildValue) {
  const next = generator.next(yeildValue);
  if (!next.done) {
    if(next.value.then){
      return next.value.then(
        result => executer(generator, result))
        .catch(err => { generator.throw(err)});
    }else {
      return executer(generator,next.value)
    }
  } else {
    return next.value;
  }
}


/**
 *  Wraps a generator function
 * @param {generatorfunction} fn
 * @return {function} Anonymous
 */

function wrap(fn) {
  if(isFunction(fn) && isGeneratorFunction(fn)){
    return function () {
      let gen = fn.apply(this,arguments);
      return executer(gen)
    }
  }
  if(isFunction(fn))
    return fn;
  throw new InvalidTypeError('Value passed is of type ' +typeof fn +'. It Is not a generator function');
}

function isGeneratorFunction(fn) {
  return fn.constructor.name === 'GeneratorFunction';
}

function isFunction(fn) {
  return  typeof fn === 'function';
}


module.exports = wrap;