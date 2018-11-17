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
let result = {};

function lotteryNumber(file: string) {
  let content = [];
  let numbers = [];
  let tempArray = [];
  let final = [];
  content = readFromFile(file).split("\r\n");
  for (let i = 0; i < content.length; i++) {
    numbers.push(content[i].substring(content[i].length - 14, content[i].length));
  }
  numbers = numbers.toString().split(";");
  numbers = numbers.toString().split(",");

  numbers = numbers.filter(function (value) {
    return (parseInt(value) == value);
  })

  for (let j = 0; j < numbers.length; j++) {
    if (!result[numbers[j]])
      result[numbers[j]] = 0;
    ++result[numbers[j]];
  }
  for (let valami in result) {
    tempArray.push([valami, result[valami]])
  }
  tempArray.sort(function (a, b) {
    return b[1] - a[1];
  })
  tempArray.forEach(function (element, index) {
    if (index < 5) {
      final.push(element)
    }    
  })
  return final;
}

console.log(lotteryNumber("lottery.csv"));

//console.log(result);


