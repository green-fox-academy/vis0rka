import { fileURLToPath } from "url";
'use strict';
export { };

// Create a method that decrypts reversed-lines.txt
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


function reversLines(file: string) {
  let content = readFromFile(file).split("\r\n");
  for (let i = 0; i < content.length; i++) {
    content[i] = content[i].split("").reverse().join("");
  }
  return content;
}

console.log(reversLines("reverse-lines.txt"));
