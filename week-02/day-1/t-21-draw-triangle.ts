'use strict';

let lineCount: number = 4;
let star: string = "*";

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let j: number = 0; j <= lineCount; j++) {
    if (j <= lineCount) {
        console.log(star.repeat(j))
    }
  }