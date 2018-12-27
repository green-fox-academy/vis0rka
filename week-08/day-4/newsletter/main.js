const newsForm = document.querySelector('.newsletter');
const container = document.querySelector('.container')

const { username, email } = newsForm.elements;

newsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', 'http://localhost:3000/signup')
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    username: username.value,
    email: email.value
  }))
  postXHR.onload = () => {
    container.innerHTML = postXHR.responseText;
    console.log(postXHR.responseText);

  }
})