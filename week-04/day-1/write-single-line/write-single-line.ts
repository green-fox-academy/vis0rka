import { fileURLToPath } from "url";
'use strict';
export { };

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');


function appendTofile(name: string, data: string) {
  try {
    if (fs.existsSync(name)) {
      console.log(`added to ${name} to ${data}`);
      return fs.appendFileSync(name, data);    
    }     
    console.log(`Unable to write file: ${name}`);  
  }
  catch (e) {
    console.log(`Unable to write file: ${name}`);   
  }
}

appendTofile("my-file.txt", "blalba");