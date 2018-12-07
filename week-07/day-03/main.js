const imageContainer = [
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_1.jpg',
    'title': '1 Picture tralala',
    'description': '1-1-1-1-1-1-1-1'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_2.jpg',
    'title': '2 Picture bumbum',
    'description': '2-2-2-2-2-2-2'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_3.jpg',
    'title': '3 Picture salalal',
    'description': '3-3-3-3-3-3-3'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_4.jpg',
    'title': '4 Picture pruprupru',
    'description': '4-4-4-4-4-4'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_5.jpg',
    'title': '5 Picture tititi',
    'description': '5-5-5-5-5-5-5-5'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_6.jpg',
    'title': '6 Picture taatata',
    'description': '6-6-6-6-66-6-6-6-66-6-6'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_7.jpg',
    'title': '7 Picture biszem baszom',
    'description': '7--7-7-7-7-7--7-7-7--7-7'
  },
  {
    'url': 'c:\greenfox\vis0rka\week-07\day-03\images\image_8.jpg',
    'title': '8 Picture koviubi',
    'description': '88-8-8-8-88--8888---88'
  },
];


/* Get Variables */

const thumbnails = document.querySelectorAll('.thumbnails img');

const buttons = document.querySelectorAll('.imgbtn');
console.log(buttons);
const left = document.querySelector('.leftarrow');
const right = document.querySelector('.rightarrow');

const mainimg = document.querySelector('.main-img');

const imgTitle = document.querySelector('.text h3');
const imgDesc = document.querySelector('.text p');

/* ADD FUNCTION */

buttons.forEach((e,i) =>{
  e.setAttribute('data-id',i)
})

let counter = 0;

function imgloader(){
  let imgsrc = thumbnails[counter].getAttribute('src');
  mainimg.setAttribute('src', imgsrc);

  imgTitle.textContent = imageContainer[counter].title;
  imgDesc.textContent = imageContainer[counter].description;
}

function arrowAdder(){
  buttons.forEach(e => {   
    e.classList.remove('arrow_box');
  })
  buttons[counter].classList.add('arrow_box')
}

right.onclick = () => {
  if (counter <= thumbnails.length - 1) {
    if (counter == thumbnails.length - 1) {
      counter = 0;
    } else
      counter++;
    arrowAdder();
    imgloader();
    
  }
}

left.onclick = () => {
  if (counter >= 0) {
    if (counter == 0) {
      counter = thumbnails.length - 1;
    } else
      counter--;
    arrowAdder();
    imgloader();

  }
}

buttons.forEach((e,i) =>{
  e.onclick = () => {
    counter = i;
    imgloader();
    arrowAdder();
  }
})