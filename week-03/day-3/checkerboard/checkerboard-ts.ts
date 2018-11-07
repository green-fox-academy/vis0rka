'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


 for (let i = 0; i < 15; i++) {   
    for (let f = 0; f < 2000;f+=100) {
    if (i %2 == 0) {
    drawSquareCenter(i*50,0+f)
    } else {drawSquareCenter(i*50,50+f)}

}
} 

function drawSquareCenter (x,y) {

    ctx.beginPath();
    ctx.fillRect(x,y, 50, 50);

}