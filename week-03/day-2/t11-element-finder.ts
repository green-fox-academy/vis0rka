'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 7];

function containsSeven(numbers) {
    for (let i:number = 0; i < numbers.length-1; i++) {
        if (numbers.indexOf(7) > -1) {         
            return "Horray";
            
        } else  {
            return "No"
        }
        
    }
} 


console.log(containsSeven(numbers));


export = containsSeven;