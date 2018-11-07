'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.



for (let i = 0; i < 5; i++) {   
    drawSquareCenter(i*20,i*20,i*20);
}

function drawSquareCenter (x,y,z) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(${255-(z*2)}, ${255-(z*2)}, 0)`;
    ctx.fillRect(x*2, y*2, x, y);

}

