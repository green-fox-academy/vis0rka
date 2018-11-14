export{};
/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
  name: string;
  gasAmount: number;
  constructor(name: string, gasAmount: number) {

    this.name = name; 
    this.gasAmount = gasAmount;
  }
  refill(car: Car) {
    let tank = car.capacity - car.gasAmount;
    this.gasAmount -= tank;
    car.gasAmount += tank;
    console.log(`${Shell.name} Station gasamount: `, this.gasAmount, `${car.name} new gasamount: `, car.gasAmount, "Refill fuel with", tank);
    
  }
}
class Car {
  name: string;
  gasAmount: number;
  capacity: number; 
  constructor(name:string, gasAmount:number = 0, capacity:number = 100) {
    this.name = name;
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let Shell = new Station("Shell",500);
let Opel = new Car("Opel");

console.log(Shell.name,`Gasamount:`, Shell.gasAmount);
console.log(Opel.name, `Gasamount:`, Opel.gasAmount);

Shell.refill(Opel);