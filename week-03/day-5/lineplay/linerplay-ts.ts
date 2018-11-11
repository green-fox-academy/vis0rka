'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let lineFreq = 30;

let fromX = 0;
let fromY = 0;

function drawliner2(fromX, fromY, lineFreq) {

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(canvas.width, lineFreq);
  ctx.strokeStyle = "purple";
  ctx.stroke();

}
function drawliner(fromX, fromY, lineFreq) {

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(lineFreq, canvas.width);
  ctx.strokeStyle = "green";
  ctx.stroke();
}

for (let i = 0; i <= canvas.width; i += lineFreq) {
  drawliner(0, i, i);
  drawliner2(i,0,i);
  
}
