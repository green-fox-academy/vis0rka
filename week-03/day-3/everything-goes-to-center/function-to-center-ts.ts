'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
let xer = 0;
let yer = 0;
for (let i = 0; i < 120; i++) {
    
    if (xer < canvas.width) {
       drawliner(xer,0) 
       drawliner(canvas.width-xer,canvas.height)
       xer += 20;
       
    } 
    if (yer < canvas.height) {
        drawliner(canvas.width,yer) 
        drawliner(0,canvas.height-yer)
        yer += 20;
        
    }

}
function drawliner(xer,yer) {
    ctx.beginPath();
    ctx.moveTo(xer,yer);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
