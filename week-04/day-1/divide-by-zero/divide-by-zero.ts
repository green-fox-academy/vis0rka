'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function dividesTen(number: number): any {
  try {
    if (number === 0)
      throw "zero divider is stupid think";
  }
  catch (err) {
    console.log(err);
  }
  return (number/10);
}
console.log(dividesTen(55));
