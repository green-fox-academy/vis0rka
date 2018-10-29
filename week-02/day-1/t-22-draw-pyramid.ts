'use strict';

let lineCount: number = 5;
let star: string = "*";
let space: string = " ";
let decrase: number = lineCount;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let j: number = 0; j < lineCount; j++) {
    if (j < lineCount) {
        console.log(space.repeat(decrase) + star)
        star +="**";
        decrase--;
    }
 
  }