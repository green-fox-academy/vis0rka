'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let cube = 20;

for (let i = 0; i < 20; i++) {   
    drawSquareCenter(i*cube,cube);
}

function drawSquareCenter (x,z) {
    ctx.beginPath();
    ctx.fillStyle = `purple`;
    ctx.fillRect(0+x, 0+x, z, z);
    ctx.strokeStyle = `black`;
    ctx.strokeRect(0+x, 0+x, z, z);

}