import { Plants } from './plants'

export class Trees extends Plants {

  constructor(color: string, water: number = 0) {
    super(color, water)
  }
  checkWater() {
    if (this.water < 10) {
      console.log(`the ${this.color} tree needs water! wateramount ${this.water}`);
    } else {
      console.log(`the ${this.color} tree doesn't needs water! wateramount ${this.water}`);
    }
  }
  addWater(waterAmount: number) {
    this.water += waterAmount * 0.4;
  }
}
