'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width, canvas.height);

for (let i = 0; i < 100; i++) {   
    drawSquareCenter(getRandomInt(500),getRandomInt(500),i);
 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function drawSquareCenter (x,y,r) {
    ctx.fillStyle = `rgb(${105+r}, ${105+r}, ${105+r})`;
    ctx.fillRect(x, y, 5, 5);  

 }