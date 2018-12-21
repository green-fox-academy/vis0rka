const postForm = document.querySelector('.postForm');

const { title, url } = postForm.elements;

postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/posts')
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    title: title.value,
    url: url.value
  }))
  postXHR.onload = () =>{
    data = JSON.parse(postXHR.responseText);
    postAddReturn(data);
  }
});

const container = document.querySelector('.containerPost');

const postAddReturn  = (data) => {
  container.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('returnDiv');

  const h4 = document.createElement('h4');
  h4.innerText = data.message;

  const pTitle = document.createElement('p');
  pTitle.innerText = `title: ${data.title}`;

  const pUrl = document.createElement('p');
  pUrl.innerText = `url: ${data.url}`;

  const button = document.createElement('button');
  button.classList.add('backButton');

  const aBack = document.createElement('a');
  aBack.setAttribute('href', './index.html');
  aBack.setAttribute('target', '_self');
  aBack.innerText = 'Back';

  button.appendChild(aBack);

  div.appendChild(h4);
  div.appendChild(pTitle);
  div.appendChild(pUrl);
  div.appendChild(button);

  container.appendChild(div);
}

