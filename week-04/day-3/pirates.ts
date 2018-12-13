class Pirate {
  name: string;
  intoxicates: number;
  constructor(name: string, intoxicates: number = 0) {
    this.name = name;
    this.intoxicates = intoxicates;
  }
  drinkSomeRum(rums: number): void {
    this.intoxicates += rums;
  }
  howsItGoingMate(): void {
    if (this.intoxicates < 4) {
      console.log('Pour me anudder!');
    } else {
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
    }
  }
}


let barbossa = new Pirate("barbossa");
let blackBarney = new Pirate("blackBarney");
let firebrand = new Pirate("firebrand");


barbossa.drinkSomeRum(5);
blackBarney.drinkSomeRum(2);
firebrand.drinkSomeRum(1);
barbossa.howsItGoingMate();
console.log(barbossa);
