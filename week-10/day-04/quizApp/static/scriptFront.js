// Catch the elements 

const questionsCont = document.querySelector('.questions');
const score = document.querySelector('.score');
let counter = 0;

const baseUrl = 'http://localhost:8080/game';

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

sendHttpRequest('GET', baseUrl, (response) => {
  renderQ(response);
})

const renderQ = (data) => {
  questionsCont.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerText = data.question;

  const ul = document.createElement('ul');
  data.answer.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('answerButton');
    li.setAttribute('data-iscorrect', element.is_correct);
    li.innerText = element.answer;
    ul.appendChild(li);
  });

  questionsCont.appendChild(h2);
  questionsCont.appendChild(ul);

  score.innerText = `Score: ${counter}`
}

questionsCont.addEventListener('click', (event) => {
  if (event.target.classList == 'answerButton') {
    if (event.target.dataset.iscorrect == 1) {
      event.target.style.backgroundColor = 'green';
      counter++;
      popUpWindow('Your answer is Good', questionsCont);
    } else {
      event.target.style.backgroundColor = 'red';
      popUpWindow('Your answer is Wrong', questionsCont);
    }
    setTimeout(() => {
      sendHttpRequest('GET', baseUrl, (response) => {
        renderQ(response);
      })
    }, 2000);
  }
})

const popUpWindow = (text,target) => {
  const modalContainer = document.createElement('div');
  const modal = document.createElement('div');
  const modalText = document.createElement('p');

  modalContainer.classList.add('modal');
  modalText.classList.add('modal-text');
  modal.classList.add('modal-content');

  modalText.innerText = text;
  modal.appendChild(modalText)
  modalContainer.appendChild(modal);
  target.appendChild(modalContainer);

}