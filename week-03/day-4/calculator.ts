'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2); // Just a helper for you to get started

let calculating: number = 0;

function calculator(args) {
  if (args.length === 3) {
    
    if (args[0] == "+") {  
        calculating = Number(args[1]) + Number(args[2]);   
    } else if (args[0] == "-") {    
        calculating = Number(args[1]) - Number(args[2]);   
    } else if (args[0] == "b") {
      calculating = Number(args[1]) / Number(args[2]);
    } else if (args[0] == "c") {
      calculating = Number(args[1]) * Number(args[2]);
    } else {
      return args[0] + " is wrong operator please choose (+ - b c)";
    }
  } else {return "pleas add 1 operator(+ - b c) and 2 number"}

  return calculating;
}

console.log('Input params are', args);
console.log("The value: " + calculator(args));
