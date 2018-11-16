'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function rectTangle(x, y, width, height, ) {
  ctx.beginPath();
  ctx.fillRect(x, y, width, height);
  ctx.fill();

  if (width > 1) {
    rectTangle(x - width * (2 / 3), y - height * (2 / 3), width * (1 / 3), height * (1 / 3))
    rectTangle(x - width * (2 / 3), y + height * (4 / 3), width * (1 / 3), height * (1 / 3))
    rectTangle(x + width * (4 / 3), y - height * (2 / 3), width * (1 / 3), height * (1 / 3))
    rectTangle(x + width * (4 / 3), y + height * (4 / 3), width * (1 / 3), height * (1 / 3))

    rectTangle(x + width * (1 / 3), y - height * (2 / 3), width * (1 / 3), height * (1 / 3))
    rectTangle(x - width * (2 / 3), y + height * (1 / 3), width * (1 / 3), height * (1 / 3))

    rectTangle(x + width * (4 / 3), y + height * (1 / 3), width * (1 / 3), height * (1 / 3))
    rectTangle(x + width * (1 / 3), y + height * (4 / 3), width * (1 / 3), height * (1 / 3))
  }
}

rectTangle(canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200)










