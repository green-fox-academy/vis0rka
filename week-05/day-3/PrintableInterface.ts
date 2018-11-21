export { }

interface Printable {
  printAllFields(): void;
}

class Domino implements Printable {
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
  printAllFields(): void {
    console.log(this.values);
  }
}
let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

for (let domino of dominoes) {
  domino.printAllFields();
}

