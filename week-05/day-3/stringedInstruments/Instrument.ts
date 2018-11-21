export abstract class Instrument {
  protected name: string;
  play(): void { }
  constructor(name: string) {
    this.name = name;
  }
}