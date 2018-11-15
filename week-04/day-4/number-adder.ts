// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function countUp(n:number):number {
  if (n === 1) {
    return n
  } else {

    return n + (countUp(n - 1));
  }

}
console.log(countUp(5));
