export abstract class Vehicle {
  name: string;
  type: string;
  engine: string;

  constructor(name: string, type: string, engine: string) {
    this.name = name;
    this.type = type;
    this.engine = engine;
  }

}