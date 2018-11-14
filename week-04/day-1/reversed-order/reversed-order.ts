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
  let content = readFromFile(file).split("\r\n").reverse();

  return content.join('\r\n');
}

console.log(reversLines("reversed-order.txt"));