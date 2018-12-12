/* Catch the elements */

const stats = document.querySelector('.candies');
const candiesButton = document.querySelector('.create-candies');
const buyLolly = document.querySelector('.buy-lollypops');
const buttons = document.querySelector('.buttonsContainer');
const lollyPops = document.querySelector('.lollypops');
const speedDisplay = document.querySelector('.speed');
const candyRains = document.querySelector('.candy-machine');


/* Event listeners */
let counter = 0;

let speed = 0;

buttons.addEventListener('click', e => {
  console.log(e);
  if (e.target.className == 'create-candies') {
    stats.innerText = counter;
    counter++;
  }
  if (e.target.className == 'buy-lollypops') {
    buyLollyPop();
    lollyPopchecker();
  }
})

buttons.addEventListener('mousedown', e => {
  if (e.target.className == 'candy-machine') {
    speed += 10;
    speedAdder();
  }
})
buttons.addEventListener('mouseup', e => {
  if (e.target.className == 'candy-machine') {
    speed -= 10;
    speedAdder();
  }
})

window.onload = function () {
  setInterval(counterAdder, 1000);
  speedAdder();
}

const speedAdder = () => {
  speedDisplay.innerText = speed;
}

const counterAdder = () => {
  counter += speed;
  stats.innerText = counter;
}


const lollpopAdder = () => {
  lollyPops.innerText += '🍭';
}

const buyLollyPop = () => {
  if (counter >= 100) {
    lollpopAdder();
    counter -= 100;
    stats.innerText = counter;
  }
}

const lollyPopchecker = () => {
  if (lollyPops.innerText == '🍭🍭🍭🍭🍭🍭🍭🍭🍭🍭') {
    speed++;
    speedAdder();
    lollyPops.innerText = '';
  }
}
