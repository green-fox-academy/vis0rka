'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies(students) {
    let morethen4 = [];
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].candies > 4) {
            morethen4.push(students[i].name)
        }
    }
    return morethen4;
}

console.log(moreCandies(students));

function aveCandies(students) {
    let ave:number = 0;
    for (let k:number = 0; k < students.length; k++) {
        ave += students[k].candies
    }
    return ave/students.length;
}

console.log(aveCandies(students));
