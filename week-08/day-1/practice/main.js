
let animalContainer = document.querySelector('#animal-info')
let counter = 1;

let btn = document.querySelector('#btn');
btn.onclick = () => {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData);
  };
  ourRequest.send();
  counter++;
  if (counter > 3 ) {
    btn.style.display = 'none';
  }
}

function renderHtml(data) {
  let newParagraph = document.createElement('p')
  let htmlString = '';
  for (let i = 0; i < data.length; i++) {
    htmlString += `${data[i].name} is a  ${data[i].species}. \r\n`;
  }
  newParagraph.innerText = htmlString;
  animalContainer.appendChild(newParagraph)
}
