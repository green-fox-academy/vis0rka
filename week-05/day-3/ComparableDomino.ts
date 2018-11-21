interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Domino): number {
    if (this.values[0] < other.values[0]) {
      return -1
    } else if (this.values[0] > other.values[0]) {
      return 1
    } return 0
  }
}
let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));



dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
});

console.log(dominoes);
