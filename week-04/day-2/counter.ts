export { };
/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {
  integer: number;
  initalvalue: number;
  constructor(integer: number = 0) {
    this.integer = integer;
    this.initalvalue = integer;
  }
  add(increaser: number = 1):number {
    if (increaser == 1) {
      return this.integer++;
    } else {
      return this.integer += increaser;
    }
  }
  get(): string {
    return this.integer.toString();
  }
  reset():number {
    return (this.integer = this.initalvalue);
  }
}

let counter1 = new Counter(15);
counter1.add(20);

console.log(counter1.get());



