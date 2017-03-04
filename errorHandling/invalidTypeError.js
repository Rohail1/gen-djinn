/**
 * Created by Rohail Najam on 3/4/2017.
 */


module.exports = function InvalidTypeError(message, extra) {

  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;

  this.message = message;

  this.extra = extra;

};



require('util').inherits(module.exports, Error);