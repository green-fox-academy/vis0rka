const form = document.querySelector('form');

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

form.onsubmit = (event) => {
  event.preventDefault();
  const { username, password } = form.elements;
  console.log(username,password)

  const postReq = new XMLHttpRequest();
  postReq.open('POST', '/login');
  postReq.setRequestHeader('Content-Type', 'application/json');
  postReq.send(JSON.stringify({
    username: username.value,
    password: password.value
  }));
  postReq.onload = () => {
    if(postReq.status === 200) {
      const response = JSON.parse(postReq.responseText);
      if(response.id) {
        window.location = `${response.pathTo}/${response.id}`;
      } else {
        window.location = `${response.pathTo}`;
      }
    }
  }
}