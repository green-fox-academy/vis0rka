interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Thing implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  printThing() {
    if (this.completed === true) {
      console.log(`[x] ${this.name}`);
    } else {
      console.log(`[ ] ${this.name}`);
    }
  }
  compareTo(other: Thing): number {
    if (other.completed) {
      return 1;
    } else if (other.completed) {
      return -1;
    }
  }
}

export { Thing };
