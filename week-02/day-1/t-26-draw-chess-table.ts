'use strict';
export { };
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;
let str: string = " %";
let spacing: string = "% ";

for (let j: number = 0; j < lineCount; j++) {
    if (j % 2 === 1) {
        console.log(str.repeat(lineCount / 2));
    } else if (j % 2 === 0) {
        console.log(spacing.repeat(lineCount / 2));
    }
}