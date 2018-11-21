'use strict';
/* Create a Flyable interface
it should have land, fly and takeOff methods (TakeOff in C#)
Create an abstract Vehicle class
it should have at least 3 fields
Extend Helicopter class from Vehicle
implement your Flyable interface
Extend Bird from your abstract Animal class (zoo exercise)
implement yourˇFlyable interface */

import {Flyable} from './IFlyable'
import {Vehicle} from './Vehicle'

class Helicopter extends Vehicle implements Flyable {

  constructor(heureka: string, type1: string, engine1: string) {
    super(heureka, type1, engine1)
  }
  fly():string {
    return 'fly';
  }
  land():string {
    return 'land';
  }
  takeOff():string {
    return 'takeOff';
  }
}

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
class Bird extends Animal implements Flyable{
  childFeedWith:string;
  constructor(name:string, age?:number,gender?:string, childFeedWith:string = "Plant") {
    super(name,age,gender)
    this.childFeedWith = childFeedWith;
  }
  getFeed() {
    return this.childFeedWith;
  }
  breed():string {
    return 'laying eggs';
  }
  fly():string {
    return 'fly';
  }
  land():string {
    return 'land';
  }
  takeOff():string {
    return 'takeOff';
  }
}