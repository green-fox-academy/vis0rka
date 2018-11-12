import { fileURLToPath } from "url";

'use strict';
export {};

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'


const fs = require('fs');
/* let fileContent = fs.readFile('my-file.txt', 'utf-8',function(error,data){
  if (error) {
    return console.log("Unable to read file: my-file.txt");
    
  } else {
     return console.log(data); 
    
     let lines = data.split('\n')
    console.log(lines.length); 
   
  }
}); */

function readFromFile(name:string) {
  try {
    return fs.readFileSync(name, 'utf-8');
  }
  catch(e) {
    console.log(e.message);
    return null; 
  }
  
}

console.log(readFromFile('my-file.txt'));