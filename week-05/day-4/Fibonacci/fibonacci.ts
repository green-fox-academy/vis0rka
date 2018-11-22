/* Write a function that computes a member of the fibonacci sequence by a given index
Create tests that covers all types of input (like in the previous workshop exercise) */

export function fibonacci(index: number): any {
  if (index < 0 || !Number.isInteger(index)) {
    return 'wrong number';
  } else if (index === 0 || index === 1) {
    return index;
  } else return (fibonacci(index - 1) + fibonacci(index - 2));
}

console.log(fibonacci(-1.5));
