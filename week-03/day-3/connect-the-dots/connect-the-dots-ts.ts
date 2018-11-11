'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let boxDots = [[10, 10], [290,  10], [290, 290], [10, 290]];

let foxDots = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

/* ctx.beginPath();
ctx.moveTo(boxDots[0][0],boxDots[0][1]);
ctx.lineTo(boxDots[1][0],boxDots[1][1]);
ctx.strokeStyle = "green";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(boxDots[1][0],boxDots[1][1]);
ctx.lineTo(boxDots[2][0],boxDots[2][1]);
ctx.strokeStyle = "green";
ctx.stroke();
 */


function connecter(array: number [] [] ) {

 for(let i = 0; i <= array.length; i++) {
    let j = i + 1; 
    ctx.beginPath();
    ctx.moveTo(array[i][0],array[i][1]);
    ctx.lineTo(array[j][0],array[j][1]);
    ctx.strokeStyle = "purple";
    ctx.stroke();
}
}
connecter(foxDots);