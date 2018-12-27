const container = document.querySelector('.container');

const sendHttpRequest = (method, url, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}



container.addEventListener('click', (event) =>{
  if (event.target.className === 'cityBox') {
    console.log(event.target.querySelector('h2').innerText);
  }
})