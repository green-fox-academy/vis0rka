import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    getThing(index:number) {
      return this.things[index];
    }

    print() {
      for (let i = 0; i < this.things.length; i++) {
      this.things[i].printThing();           
      }
    }
}

export { Fleet };