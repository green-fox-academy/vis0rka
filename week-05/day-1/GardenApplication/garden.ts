import { Plants } from './plants'
import { Flowers } from './flower'

export class Garden {
  protected name: string;
  protected plants: Plants[] = [];
  constructor(name: string) {
    this.name = name;
  }

  addPlants(plant: Plants): void {
    this.plants.push(plant);
  }

  waterInfo(): void {
    this.plants.forEach(function (element) {
      element.checkWater();
    });
  }
  watering(amount: number): void {
    let equalAmount = amount / this.plants.length;
    console.log(`Watering with ${equalAmount}`);
    this.plants.forEach(function (element) {
      if (element instanceof Flowers) {
        element.addWater(equalAmount);
      } else {
        element.addWater(equalAmount);
      }
    })
    this.waterInfo();
  }

}