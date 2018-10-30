// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList: number[] = [1,2,3,4,5];

let newList: number[] = numList.map(function(v) {
    if (v == 3) {
    return v += 1;
} else 
    return v;
})
console.log(newList);