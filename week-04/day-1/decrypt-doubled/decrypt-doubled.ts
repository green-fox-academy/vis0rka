import { fileURLToPath } from "url";
'use strict';
export { };

// Create a method that decrypts duplicated-chars.txt
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


function decrypts(file:string) {
  let content = [];
  let decryptText = "";
  content = readFromFile(file).split("");
  content.forEach(function(element,index)  {
    if (index % 2 == 0) {
      console.log(element);
      decryptText += element;
    }
  })
return decryptText;  
}
console.log(decrypts("duplicated-chars.txt"));



