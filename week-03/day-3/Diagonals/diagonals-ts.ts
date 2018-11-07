'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

for (let i = 0; i < 12; i++) {
    diagonals(i*50)
}

function diagonals(x) {
ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(50+x, 50);
ctx.lineTo(x, 100);
ctx.fillStyle = 'green';
ctx.fill();
}


