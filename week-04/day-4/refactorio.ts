export {};
// Create a recursive function called `refactorio`
// that returns it's input's factorial

function factorial (n: number): number {
  if (n <= 1) {
    return n;
  }  
  return n + (factorial(n-1))
}

console.log(factorial(4));
