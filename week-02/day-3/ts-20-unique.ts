//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let x = [];

function unique(arr) {
    arr.forEach(function(e,i,a) {
     if (arr.indexOf(a[i]) === i) {
         x.push(e);
         
     }
     
     
    })
    return x;
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


