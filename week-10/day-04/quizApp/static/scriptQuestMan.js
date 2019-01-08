// catch the elements

const questManCont = document.querySelector('.manQuest');

// create the render method 

const renderQuestions = (data) => {
  questManCont.innerHTML = '';
  const ul = document.createElement('ul');
  data.forEach(element => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.classList.add('questText');
    p.innerText = element.question;

    const closeBtn = document.createElement('p');
    closeBtn.classList.add('closeBtn');
    closeBtn.setAttribute('data-id', element.id)
    closeBtn.innerText = 'Delete';

    li.appendChild(p);
    li.appendChild(closeBtn);
    ul.appendChild(li);
  });

  questManCont.appendChild(ul);
}
// get the data from the server 

const baseUrl = 'http://localhost:8080/allquestions';

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
window.onload = () => {
  sendHttpRequest('GET', baseUrl, (response) => {
    renderQuestions(response);
  });
};

// add event listener to delete buttons

questManCont.addEventListener('click', (event) => {
  if (event.target.classList == 'closeBtn') {
    sendHttpRequest('DELETE', `http://localhost:8080/questions/${event.target.dataset.id}`, (response) => {
      console.log(response)
    });
  }
});


// catch the form 

const form = document.querySelector('.addQuest form');

console.log(form.elements);

form.onsubmit = () => {
  event.preventDefault();
  const { question, answer1, answer2, answer3, answer4, radanswers } = form.elements; 
  console.log(question.value, answer1,answer2, answer3, answer4, radanswers.value);
   const postReq = new XMLHttpRequest();
  postReq.open('POST', `/questions`);
  postReq.setRequestHeader('Content-type', 'application/json');
  postReq.send(JSON.stringify({
    question: question.value,
    answer1: answer1.value,
    answer2: answer2.value,
    answer3: answer3.value,
    answer4: answer4.value,
    wichtrue: radanswers.value
  })); 
  postReq.onload = () => {
    if (postReq.status === 200) {
      console.log((JSON.parse(postReq.responseText)));
    }
  }
}