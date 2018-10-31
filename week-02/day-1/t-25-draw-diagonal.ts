'use strict';

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let lineCount3: number = 6;
let str2: string = "%";
let spacing2: string = " ";
let spaceBef: number = 0;
let spaceAft: number = 3;

for (let j: number = 0; j <= lineCount3; j++) {
  if (j < 1 || j === lineCount3) {
    console.log(str2.repeat(lineCount3));
  }  else if (spaceAft >= 0) {
    console.log(str2 + spacing2.repeat(spaceBef) + str2 + spacing2.repeat(spaceAft) + str2);
    spaceBef+=1;
    spaceAft-=1;
  }
}