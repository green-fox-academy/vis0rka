'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let freq: number = 20;

let frommX: number = 0;
let frommY: number = 0;

let toX: number = canvas.width;
let toy: number = 0;

let sizer: number = 2;

function drawliner(frommX, frommY, toX, freq) {
  
  ctx.beginPath();
  ctx.moveTo(frommX, frommY);
  ctx.lineTo(toX, freq);
  ctx.strokeStyle = "purple";
  ctx.stroke();

}

for ( let k = 0; k < sizer; k ++) {
  for (let i = 0; i <= toX/sizer; i += freq) {
        drawliner(frommX+i, 0, toX/sizer, i,);
  }
}



for (let i = 0; i <= toX/sizer; i += freq) {
  drawliner(toX/sizer+i, 0, toX,i,);
}