'use strict';

let currentHours: number = 12;
let currentMinutes: number = 12;
let currentSeconds: number = 59;

let secondsInDay: number = 86400;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let day: number = (currentHours*3600) + (currentMinutes*60) + currentSeconds;

console.log("Remaining seconds: " + (secondsInDay - day));