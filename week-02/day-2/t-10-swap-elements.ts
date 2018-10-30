// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string[] = ["Arthur", "Boe", "Chloe"];
let swapper:string = abc[0];
abc[0] = abc[2];
abc[2] = swapper;

console.log(abc);