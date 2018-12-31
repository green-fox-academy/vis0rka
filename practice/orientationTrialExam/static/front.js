const container = document.querySelector('.container');

const renderForm = () => {
  const form = document.createElement('form');
  const urlLabel = document.createElement('label');
  const urlInput = document.createElement('input');
  const aliasLabel = document.createElement('label');
  const aliasInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  const infoText = document.createElement('p');

  infoText.innerText = 'Information Text';

  urlLabel.innerText = 'URL';
  urlLabel.setAttribute('for', 'url');

  aliasLabel.innerText = 'Alias';
  aliasLabel.setAttribute('for', 'alias');

  urlInput.setAttribute('type', 'text');
  urlInput.setAttribute('name', 'url');
  urlInput.setAttribute('id', 'url');

  aliasInput.setAttribute('type', 'text');
  aliasInput.setAttribute('name', 'alias');
  aliasInput.setAttribute('id', 'alias');

  submitBtn.innerText = 'Submit';
  submitBtn.classList.add('submitBtn');

  form.appendChild(infoText);

  form.appendChild(urlLabel);
  form.appendChild(urlInput);

  form.appendChild(aliasLabel);
  form.appendChild(aliasInput);

  form.appendChild(submitBtn);

  container.appendChild(form);
}

renderForm();

const sendHttpRequest = (method, url, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
};

const baseUrl = 'http://localhost:3000/api/links';

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();

  const urlValue = document.querySelector('#url');
  const aliasValue = document.querySelector('#alias');
  const infoText = document.querySelector('p');
  const postXHR = new XMLHttpRequest();

  postXHR.open('POST', '/api/links')
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    url: urlValue.value,
    alias: aliasValue.value
  }))
  postXHR.onload = () => {
    if (postXHR.status === 200) { // <- ide kell ez a status check?
      data = JSON.parse(postXHR.responseText);
      urlValue.value = '';
      aliasValue.value = '';
      infoText.style.color = 'black';
      infoText.innerHTML = `Your URL is aliased to <strong>${data.alias}</strong> and your secret code is <strong>${data.secretCode}.</strong>;`
      console.log(data)
    } else {
      data = JSON.parse(postXHR.responseText);
      infoText.innerText = data.message;
      infoText.style.color = 'red';
    }
  }
}