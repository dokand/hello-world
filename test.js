'use strict';
function justAFunction() {
  console.log("functions can be declared");
}

var justAnotherFunction = function () {
  console.log("functions can be expressed as objects");
};

console.log("All functions are objects of type 'function'");
console.log(typeof justAFunction);
console.log(typeof justAnotherFunction);

// This function is available through hoisting
// although it will be declared later
console.log(typeof justAFunctionThatWillBeHoisted); 

function justAFunctionThatWillBeHoisted() {
  console.log("Function declarations are automatically hoisted to the top");
}