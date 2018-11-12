import { fileURLToPath } from "url";
'use strict';
export { };

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
const fs = require('fs');

function readFromFile(name: string): string {
  try {
    return fs.readFileSync(name, 'utf-8');
  }
  catch (e) {
    console.log(e.message);
    return null;
  }
}

function diagChecker(array) {
  let diager: string = "";
  if (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O") {
   diager = "WIN";
  } else { 
   diager = "LOSE";
  }
  return diager;
}

function rowChecker(array) {
  let rower: string = "";
  array.forEach(function(e,i) {
  if (e == "OOO") {
    rower = "WIN";
  } else  {
    rower = "LOSE"
  }
  });
  return rower; 
}

function columnChecker(array) {
  let columner:string = "";
  let inc:number = 0;
  array.forEach(function(e,i,a) {
   for (let k = 0; k < array.length; k++) {
      if (a[k][inc] == "O" && a[k][inc] == "O" && a[k][inc] == "O" ) {
        columner = "WIN";
      } else {
        inc += 1;
        columner = "LOSE"
      }    
  }
  });
 return columner;
}

function ticTacResult(name:string) {
  let winner: string = "";
  let content = [];
  content = readFromFile(name).split("\r\n");
  if (diagChecker(content) == "WIN" || columnChecker(content) == "WIN" || rowChecker(content) == "WIN") {
    winner = "O WIN"
  } else {
    winner = "O DONT WIN"
  }
  return winner;
} 


console.log(ticTacResult('win-o.txt'))
// Should print "O"

//console.log(ticTacResult('win-x.txt'))
// Should print "X"

//console.log(ticTacResult('draw.txt'))
// Should print "Draw"

