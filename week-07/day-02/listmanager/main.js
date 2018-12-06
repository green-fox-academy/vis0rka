const container = document.createElement('div');

const leftside = document.createElement('div');

const controller = document.createElement('div');

const rightside = document.createElement('div');

const body = document.querySelector('body');

/* ADD SUBCHILDES LEFT*/
const content = ['bread', 'milk', 'orange', 'tomato']

const ul = document.createElement('ul');


content.forEach((e, i) => {
  const li = document.createElement('li');
  li.textContent = content[i];
  ul.appendChild(li);
})

/* ADD SUBCHILDES CONTROLLER*/

const up = document.createElement('button');
up.textContent = 'Up';

const jobbra = document.createElement('button');
jobbra.textContent = '>';

const deleter = document.createElement('button');
deleter.textContent = 'X';

const down = document.createElement('button');
down.textContent = 'Down';

/* ADD SUBCHILDES rightside*/;
const rightUl = document.createElement('ul');


/* ADD CSS TO DOCUMENT */
container.classList.add('container');
leftside.classList.add('sizer');
controller.classList.add('sizer');
rightside.classList.add('sizer');

/* ADD FINAL ELEMENTS */
leftside.appendChild(ul);
container.appendChild(leftside);

controller.appendChild(up);
controller.appendChild(jobbra);
controller.appendChild(deleter);
controller.appendChild(down);
container.appendChild(controller);

rightside.appendChild(rightUl);
container.appendChild(rightside);

body.appendChild(container);


/* ADD Functions */
const firstUl = document.querySelector('ul');
const listitem = firstUl.childNodes;
console.log(listitem);
let counter = 0;
listitem[counter].style.backgroundColor = 'red';

up.onclick = () => {
  if (counter > 0) {
    counter--;    
    listitem.forEach((e, i) => {
      e.style.backgroundColor = 'white';
    })
    listitem[counter].style.backgroundColor = 'red';
  }
  console.log(counter);
  
}

down.onclick = () => {
  if (counter < listitem.length-1 ) { 
    counter++; 
    listitem.forEach((e, i) => {
      e.style.backgroundColor = 'white';
    })
    listitem[counter].style.backgroundColor = 'red';
    console.log(counter)
    
  }
  
}
deleter.onclick = () => {
  firstUl.removeChild(firstUl.childNodes[counter]);
  if (counter > 0) {
    counter--;
    listitem[counter].style.backgroundColor = 'red';
  }
  if (counter == 0) {
    listitem[counter].style.backgroundColor = 'red';
  }
}

jobbra.onclick = () => {
  const removedChild = listitem[counter];
  firstUl.removeChild(firstUl.childNodes[counter]);
  removedChild.style.backgroundColor = 'white';
  rightUl.appendChild(removedChild);
  if (counter > 0) {
    counter--;
    listitem[counter].style.backgroundColor = 'red';
  }
  if (counter == 0) {
    listitem[counter].style.backgroundColor = 'red';
  }
  console.log(removedChild)
}