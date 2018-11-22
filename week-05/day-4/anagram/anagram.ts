/* Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */

export function anagram(text1: string, text2: string) {
  if (text1.length === text2.length) {
    let tempString = '';
    for (let char of text1) {
      tempString = char + tempString;
    }
    if (tempString === text2) {
      return true;
    } return false;
  }
  return false;
}

