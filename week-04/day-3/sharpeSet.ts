export {};
/* Sharpie Set
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

class Sharpe {
  color: string;
  width: number;
  inkAmount: number;
  constructor(color:string,width:number, inkAmount:number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  use():void {
       this.inkAmount--;
  }
}

class SharpeSet {
  name:string;
  colors: Sharpe [] = [];

  constructor(name:string) {
    this.name = name;
  }

  addSharpe(sharpe: Sharpe) {
    this.colors.push(sharpe)
  }

  countUsable(name: SharpeSet) {
    for(let i = 0; i < this.colors.length; i++ ) {
      if (this.colors[i].inkAmount > 0) {
        console.log(`We can use these colors: ${this.colors[i].color}`);       
      }
    }
  }

  removeTrash(name: SharpeSet) {
    for (let k = 0; k < this.colors.length; k++) {
      if (this.colors[k].inkAmount === 0) {
        console.log(`remove this: ${this.colors[k].color}`);
        
        this.colors.splice(k,1);
      }
    }
  }
}

const sharpeset = new SharpeSet("toltarto");

sharpeset.addSharpe(new Sharpe("pink",100));
sharpeset.addSharpe(new Sharpe("black",60,0));
sharpeset.addSharpe(new Sharpe("orange",70,20));
sharpeset.addSharpe(new Sharpe("blue",80,0));

console.log(`Original: ${sharpeset}`);
console.log("-----------");
sharpeset.countUsable(sharpeset);
console.log("-----------");

sharpeset.removeTrash(sharpeset);
console.log("-----------");

console.log(`New set: ${sharpeset}`);
