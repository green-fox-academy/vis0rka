export {};

/* Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
 */

class Animal {
  name: string;
  hunger: number;
  thirst: number;
  constructor(name:string, hunger:number = 50, thirst:number = 50 ) {
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat():number {
    return this.hunger -= 1;
  }
  drink():number {
    return this.thirst -= 1;
  }
  play():number {
    return (this.hunger += 1, this.thirst +=1)
  }
}

class FarmClass {
  name:string;
  animals: Animal [] = [];
  places: number = 5;

  constructor(name:string) {
    this.name = name;
  }

  breed(animal: Animal){
    if(this.places > 0) {
      this.animals.push(animal)
      this.places--;
    } else {
      console.log(`No more place in the farm`);      
    }
  }

   slaughter(farmclass: FarmClass){
    this.animals.sort(function(a,b){
      return b.hunger - a.hunger;
    })
    console.log(`remove this animal: ${this.animals[0].name}`);
    this.animals.shift();   
  } 
}

const allatkert = new FarmClass("allatkert");

allatkert.breed(new Animal("lion"));
allatkert.breed(new Animal("elephant",40,40));
allatkert.breed(new Animal("dog",30,30));
allatkert.breed(new Animal("cat",20,20));
allatkert.breed(new Animal("monkey",10,10));

allatkert.breed(new Animal("mouse"));


console.log(allatkert);

allatkert.slaughter(allatkert);

console.log(allatkert);

