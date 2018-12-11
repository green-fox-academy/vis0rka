function createNode(element) {
  return document.createElement(element);
}

function appendChild(parent, el) {
  return parent.appendChild(el);
}

const hitList = document.querySelector('.hitList');
const filmList = document.querySelector('.filmList');

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

    filmSearcher(data);
  });
}

const hitListAdder = (data) => {
  data.forEach(e => {
    console.log(e.name);

    const hitUl = createNode('ul');
    const hitListelem = createNode('li');

    hitListelem.innerText = e.name;

    appendChild(hitListelem, hitUl);
    appendChild(hitList, hitListelem);

  })
}

const filmSearcher = (data) => {
  data.forEach(e => {
    let chFilms = e.films;
    console.log(chFilms);
    chFilms.forEach(e => {
     sendHttpRequest(e, 'GET', (responseFilms) => {
        const dataFilms = responseFilms;
        console.log(dataFilms.title)

        const filmselem = createNode('p');

        filmselem.innerText = dataFilms.title;
        appendChild(filmselem, filmList);
        
      }); 
    })  
  })
}





