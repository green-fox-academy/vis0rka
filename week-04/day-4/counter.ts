// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(n) {
  console.log(n);
  if(n >= 1) countDown(n-1);
}
countDown(10);