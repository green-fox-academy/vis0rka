export { };

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function earsCounter(n: number): number {
  if (n === 0) {
    return n;
  } else if (n % 2 == 0) {

    return 3 + (earsCounter(n - 1));
  } else if (n % 2 == 1) {

    return 2 + (earsCounter(n - 1));
  }

}
console.log(earsCounter(4));
