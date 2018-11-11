'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let freqenter = 20;

let fromToX:number;
let fromToY:number; 

let linToX:number;
let linToY:number;


function envLiner(freqenter) {

ctx.beginPath();
ctx.moveTo(freqenter, canvas.height/2);
ctx.lineTo(canvas.width/2,canvas.height/2-freqenter);
ctx.strokeStyle = "purple";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2-freqenter);
ctx.lineTo(canvas.width-freqenter,canvas.height/2);
ctx.strokeStyle = "purple";
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(canvas.width-freqenter, canvas.height/2);
ctx.lineTo(canvas.width/2,canvas.height/2+freqenter);
ctx.strokeStyle = "purple";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2+freqenter);
ctx.lineTo(freqenter,canvas.height/2);
ctx.strokeStyle = "purple";
ctx.stroke(); 

}

for (let i: number = freqenter; i <= canvas.height/2; i+=freqenter) {
  envLiner(i)

}