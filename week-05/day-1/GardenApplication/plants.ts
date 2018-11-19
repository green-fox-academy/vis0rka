export class Plants {
  protected color: string;
  protected water: number;
  constructor(color: string, water: number = 0) {
    this.color = color;
    this.water = water;
  }
  checkWater() {

  }

  addWater(waterAmount: number) {
  }
}