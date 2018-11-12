import { fileURLToPath } from "url";
'use strict';
export { };

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

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

function uniqueIp(file:string) {
  let content = [];
  let allIps = [];
  let uniqueIp = [];
  content = readFromFile(file).split("   ");
  allIps = content.filter((element, index) => {
    return index % 2 === 1;
  })
  allIps.forEach(function(e,i,a){
    if (allIps.indexOf(a[i]) === i) {
      uniqueIp.push(e)
    }
  }) 
  return uniqueIp;
}

console.log(uniqueIp("log.txt"));

function getPostRatio(file:string):number {
  let contentGetPost = [];
  let Get = [];
  let Post = [];
  contentGetPost = readFromFile(file).split(" ");
  Get = contentGetPost.filter((element) => {
    return element === "GET";
  })
  Post = contentGetPost.filter((element) => {
    return element === "POST";
  })
  return (Get.length/Post.length);
}

console.log(getPostRatio("log.txt"));
