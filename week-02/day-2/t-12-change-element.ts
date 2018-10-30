// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];


let newList: number[] = numList.map(function(v,i,a) {
    if (v == 8) {
    return v = 4;
} else 
    return v;
})
console.log(newList);