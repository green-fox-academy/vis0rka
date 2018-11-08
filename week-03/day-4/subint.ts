'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

// Example

function subint(int, sub) {
  let temp = [];
  for(let i = 0; i < sub.length; i ++) {
     if(sub[i].toString().includes(int.toString())) {
       temp.push(sub.indexOf(sub[i]))
     }       
} return temp;
}


console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
