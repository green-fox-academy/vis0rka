'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



 function rectTangle(x,y,width,height,lineW,color) {
  ctx.beginPath();
  ctx.lineWidth=lineW;
  ctx.strokeStyle=`rgb(125, ${color}, ${color})`;;
  ctx.strokeRect(x,y,width,height);
  ctx.stroke();

if (width > 20) {
  rectTangle(x-width*0.25,y-height*0.25,width*0.5,height*0.5,lineW*0.25,color+40)
  rectTangle(x-width*0.25,y+height*0.75,width*0.5,height*0.5,lineW*0.25,color+40)
  rectTangle(x+width*0.75,y-height*0.25,width*0.5,height*0.5,lineW*0.25,color+40)
  rectTangle(x+width*0.75,y+height*0.75,width*0.5,height*0.5,lineW*0.25,color+40)
 }
} 




rectTangle(125,125,250,250,20,0)










