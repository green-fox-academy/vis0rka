import { Plants } from './plants'

export class Flowers extends Plants {
  constructor(color: string, water: number = 0) {
    super(color, water)
  }
  checkWater():void {
    if (this.water < 5) {
      console.log(`the ${this.color} flower needs water! wateramount ${this.water}`);
    } else {
      console.log(`the ${this.color} flower doesn't needs water! wateramount ${this.water}`);
    }
  }
  addWater(waterAmount: number):void {
    this.water += waterAmount * 0.75;
  }
}
