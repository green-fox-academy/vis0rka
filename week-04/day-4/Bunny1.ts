export {};

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


function earsCounter(n):number {
  if ( n === 0) {
    return n
  } else {
 
    return 2 + (earsCounter(n-1));
  }

}
console.log(earsCounter(10));
