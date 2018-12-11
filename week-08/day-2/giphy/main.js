console.log('hello');

function createNode(element) {
  return document.createElement(element);
}

function appendChild(parent, el) {
  return parent.appendChild(el);
}
let giphContainer = document.querySelector('.giphContainer');

const apiKey = 'YlJ6fEjUok09RX80NzcGdbMRD21xdgL1';

searchKey = 'funny';

const limit = 16;
const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKey}&limit=${limit}&offset=0&rating=G&lang=en;`

console.log(giphyURL)

const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let responsData = JSON.parse(httpRequest.responseText);
    let receivedGiphs = responsData.data;
    console.log(receivedGiphs)
  }
};

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

sendHttpRequest(giphyURL, 'GET', (response) => {
  let receivedGiphs = response.data;
  console.log(receivedGiphs);
  receivedGiphs.forEach(element => {
    let img = createNode('img');
    img.setAttribute('src', element.images.original_still.url);
    img.classList.add('images');
    appendChild(giphContainer, img)
  });
  const giphContainerImages = document.querySelectorAll('img');

  console.log(giphContainerImages);

  giphContainerImages.forEach((e, i) => {

    e.onclick = () => {
      giphContainerImages.forEach((e,i) => {
        e.classList.remove('onFocus');
        e.setAttribute('src',receivedGiphs[i].images.original_still.url)
      })

      console.log(receivedGiphs[i].images.downsized.url)
      e.classList.add('onFocus')
      e.setAttribute('src', receivedGiphs[i].images.downsized.url);

    }

  })
})



