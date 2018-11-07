'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let u = 0;
for (let i = 0; i < 10; i++) {   
    drawSquareCenter(u,i*20);
    u += i*20;
}
function drawSquareCenter (x,z) {

    ctx.beginPath();
    ctx.fillStyle = `purple`;
    ctx.fillRect(x,x, z, z);
    ctx.strokeStyle = `black`;
    ctx.strokeRect(x, x, z, z); 
}

