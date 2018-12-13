function createNode(element) {
  return document.createElement(element);
}

function appendChild(parent, el) {
  return parent.appendChild(el);
}

const hitList = document.querySelector('.hitList');
const filmList = document.querySelector('.filmList');

const hitUnList = document.querySelector('.hitList ul');
const filmListUl = document.querySelector('.filmList ul')

const form = document.querySelector('form');
let searchValue = '';
let apiUrl = '';

const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}

form.onsubmit = (event) => {
  event.preventDefault();
  searchValue = document.querySelector('#chname').value;
  apiUrl = `https://swapi.co/api/people/?search=${searchValue}`

  sendHttpRequest(apiUrl, 'GET', (response) => {
    const data = response.results;
    console.log(data);
    hitListAdder(data);
    clicker(data);
  });
}

const hitListAdder = (data) => {
  data.forEach(e => {

    const hitListelem = createNode('li');

    hitListelem.innerText = e.name;
    hitListelem.setAttribute('data-name', e.name)
    hitListelem.classList.add('hitListElem');

    appendChild(hitUnList, hitListelem);

  })
}




const filmSearcher = (data) => {
  data.forEach(e => {
    if (e.name == characterName) {
      let chFilms = e.films;
      console.log(chFilms);
      chFilms.forEach(e => {
        sendHttpRequest(e, 'GET', (responseFilms) => {
          const dataFilms = responseFilms;

          let filmsLi = createNode('li')

          filmsLi.innerText = dataFilms.title;
          appendChild(filmListUl, filmsLi)
        });
      })
    }
  })
}

let characterName = '';

const clicker = (data) => {
  hitUnList.addEventListener('click', e => {
    if (e.target.className == 'hitListElem') {
      characterName = e.target.dataset.name;
      clearer();
      filmSearcher(data);
    }
  })
}


const clearer = () => {
  while (filmListUl.firstChild) {
    filmListUl.removeChild(filmListUl.firstChild);
  }
}
