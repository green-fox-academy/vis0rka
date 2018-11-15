export {};
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function stringerX(text: string): string {
  if (text.indexOf("x") < 0) {
    return text;
  }
  return stringerX(text.replace("x", "y"));
}

console.log(stringerX("xanax"));
