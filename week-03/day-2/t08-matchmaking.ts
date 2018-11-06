'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

let girlsboys = [];

function makingMatches(girls,boys) {
  for (let i: number = 0; i < girls.length ; i++)  {
    girlsboys.push(girls[i]);
    girlsboys.push(boys[i]);
   
}
return girlsboys;
}

console.log(makingMatches(girls,boys));

export = makingMatches;