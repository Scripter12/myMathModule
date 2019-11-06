const multi = require('./sum.js');
let divide = require('./divide.js');

/* 
  myMathModule

  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/
const Math = {
  PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
  divide: divide,
  mul: multi
}

module.exports = Math
