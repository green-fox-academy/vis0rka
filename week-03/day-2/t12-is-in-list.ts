'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

function checkNums(listOfNumbers) { 
    let diviser = 4;
    for (let i: number = 0; i < 4; i++) {
        if (!listOfNumbers.includes(diviser)) {                      
            
           return false;                     
        } 
        diviser += 4;       
        
    }  
    return true;             
}

export = checkNums;


/* if (listOfNumbers.includes(4) && listOfNumbers.includes(8) ){
    return true;
} else {return false;} */