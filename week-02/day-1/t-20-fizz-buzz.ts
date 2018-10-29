'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let j: number = 1; j <= 100; j++) {

    if (j % 3 == 0 && j % 5 == 0)  {
        console.log("FizzBuzz");
    }
    else if (j % 3 == 0) {
        console.log("Fizz");
    }
    else if (j % 5 == 0) {
        console.log("Buzz");
    }
    else console.log(j)
  }

