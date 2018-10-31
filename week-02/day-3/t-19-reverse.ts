// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList:number [] = [3, 4, 5, 6, 7, 8];

let reverseList:number [] = numList.reverse();

console.log(reverseList);

function revlist(list) {
    let tempList = [];
    let x = list.length-1;
    for (let i = 0; i < list.length; i ++) {
        tempList[i] = numList[x]       
        x--;
    }
    return list;
}

console.log(revlist(numList));
