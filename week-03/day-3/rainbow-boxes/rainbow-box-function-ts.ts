'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
for (let i = 0; i < 50; i++) {   
    drawSquareCenter(i*15,i*10);
}

function drawSquareCenter (x,y) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${255-y}, ${150-y}, ${y})`;
    ctx.strokeRect(canvas.width/2-x/2, canvas.height/2-x/2, x, x);

}
