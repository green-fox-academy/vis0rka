/* Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
Create a test for that. */

export function countLetters(text:string):any {
  let dictionary = {};
  let tempArray = text.toLowerCase().split("")
  for (let char of tempArray) {
    dictionary[char] = 0;
  }
  for (let keys of Object.keys(dictionary)) {
    tempArray.forEach(function(element){
      if(element == keys) {
        dictionary[keys] ++;
      }
    })
  }
  return dictionary;
}



/* function countLetters(text:string):any {
  let dictionary = {};
  let tempArray = text.toLowerCase().split("")
  for (let char of tempArray) {
    if (dictionary[char])  {
      dictionary[char]++;
    } else dictionary[char] = 1;
  }
  return dictionary;
} */