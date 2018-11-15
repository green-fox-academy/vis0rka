export { }
// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(n: number, x: number): number {
  if (x <= 1) {
    return n;
  } else {
    return n * (powerN(n, x - 1));
  }

}
console.log(powerN(4, 2));
