'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aSide: number = 100;
let bSide: number = 200;
let cSide: number = 300;

let sufaceArea = 2 * ((aSide * bSide) + (aSide * cSide) + (bSide * cSide));
console.log("Surface Area: " + sufaceArea)

let volumeCuboid = aSide * bSide * cSide;
console.log("Volume: " + volumeCuboid);