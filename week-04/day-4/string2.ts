export {};
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function stringerX(text: string): string {
  if (text.indexOf("x") < 0) {
    return text;
  }
  return stringerX(text.replace("x", ""));
}

console.log(stringerX("xanax"));
