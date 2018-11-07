'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

for (let i = 0; i < 4; i++) {   
    drawSquareCenter(i*50);
}

function drawSquareCenter (x) {
    ctx.beginPath();
    ctx.strokeRect(canvas.width/2-x/2, canvas.height/2-x/2, x, x);

}