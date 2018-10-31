'use strict';



// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let lineCount2: number = 10;
let str: string = "%";
let spacing: string = " ";

for (let j: number = 0; j <= lineCount2; j++) {
  if (j < 1) {
    console.log(str.repeat(lineCount2));
  }
  else if (j < lineCount2 -1) {
    console.log(str + spacing.repeat(lineCount2-2) + str);
    
  }
  else if (j > lineCount2 -1) {
    console.log(str.repeat(lineCount2));
  }
}