import { fileURLToPath } from "url";
'use strict';
export {};


// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


const fs = require('fs');

function readFromFile(name:string) {
  try {
    return fs.readFileSync(name, 'utf-8');
  }
  catch(e) {    
    return null; 
  }
  
}

function lineCounter(fileName: string) {
  const fileContent = readFromFile(fileName);
  if (fileContent !== null) {
    let lines = fileContent.split('\r\n');
    return lines.length;   
  }
  return "0 it can't open the file"; 
}

console.log(lineCounter("my-fil.txt"));
