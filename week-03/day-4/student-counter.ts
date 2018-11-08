'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

 function candies(students) {
    let candieslist = [];
    for (let i = 0; i < students.length; i++) {
        /* console.log(students[i].name); */
        candieslist.push(students[i].name,"candies:",students[i].candies,"\n")  
        
    }


    return candieslist.join(" ");
}

console.log(candies(students));


function sumAge(students) {
    var sum = 0;
    for (let i = 0; i < students.length; i++) {
    if (students[i].candies < 5 ) {
        sum = sum + students[i].candies;
    }

    }
    return sum;
}


console.log("sume of age: "+ sumAge(students));
