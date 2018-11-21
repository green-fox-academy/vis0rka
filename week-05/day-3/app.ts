export {}

abstract class Animal {
  protected name:string;
  age:number;
  gender:string;
  constructor(name:string, age:number = 0,gender:string="unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getName():String {
    return this.name;
  }
  breed(){
  }
}

class Mammal extends Animal {
  childFeedWith:string;
  constructor(name:string, age?:number,gender?:string, childFeedWith:string = "Milk") {
    super(name,age,gender)
    this.childFeedWith = childFeedWith;
  }
  getFeed() {
    return this.childFeedWith;
  }
  breed():string {
    return 'pushing miniature versions out'
  }
}

class Reptile extends Animal {
  childFeedWith:string;
  constructor(name:string, age?:number,gender?:string, childFeedWith:string = "Meat") {
    super(name,age,gender)
    this.childFeedWith = childFeedWith;
  }
  getFeed() {
    return this.childFeedWith;
  }
  breed():string {
    return 'laying eggs'
  }
}


class Bird extends Animal {
  childFeedWith:string;
  constructor(name:string, age?:number,gender?:string, childFeedWith:string = "Plant") {
    super(name,age,gender)
    this.childFeedWith = childFeedWith;
  }
  getFeed() {
    return this.childFeedWith;
  }
  breed():string {
    return 'laying eggs'
  }

}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed() + ' and feed with ' + reptile.getFeed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed() + ' and feed with ' + mammal.getFeed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + ' and feed with ' + bird.getFeed());