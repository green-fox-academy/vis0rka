import { fileURLToPath } from "url";
'use strict';
export { };

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

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

function copyToFile(fromFile: string, toFile: string): any {
  let content = readFromFile(fromFile);
  if (content !== null) {
    fs.appendFileSync(toFile, content);
    return true;
  } else {
    return `Unable to read file: ${fromFile}`;
  }
}

console.log(copyToFile("kolbasz.txt", "my-file.txt"));