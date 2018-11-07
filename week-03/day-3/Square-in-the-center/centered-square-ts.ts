'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

drawSquareCenter(10,10);

function drawSquareCenter (x,y) {
ctx.fillStyle = 'red';
ctx.fillRect(canvas.width/2-x/2, canvas.height/2-y/2, x, y);

}