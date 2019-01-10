const form = document.querySelector('form');

const answer = document.querySelector('.answer')

form.onsubmit = () => {
  event.preventDefault();
  console.log(form.elements);
  const { url, alias } = form.elements;
  const postReq = new XMLHttpRequest();
  postReq.open('POST', `/api/links`);
  postReq.setRequestHeader('Content-type', 'application/json');
  postReq.send(JSON.stringify({ 
    url: url.value,
    alias: alias.value
  }));
  postReq.onload = () => {
    if (postReq.status === 200) {
      const resp = JSON.parse(postReq.responseText)
      answer.innerText = `Your URL is  aliased to ${resp.url} and your secred code is ${resp.secretCode}`
      url.value = '';
      alias.value = '';
    } else if (postReq.status === 400){
      answer.innerText = `Your alias is already in use`
    } else {
      answer.innerText = 'Something went wrong'
    }
  }
};

const { bike, car, tape, orangutan } = form.elements;


