// Create the company categories from the database
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


sendHttpRequest('GET', '/companies', (response) => {
  console.log(response);
  categoryAdder(response);
});

const chooseCompany = document.querySelector('.chooseCompany');

const categoryAdder = (data) => {
  const tempArray = [];
  data.forEach(e => {
    if (tempArray.indexOf(e.company) == -1) {
      tempArray.push(e.company)
    }
  })
  tempArray.forEach(e => {
    const option = document.createElement('option');
    option.setAttribute('value', e);
    option.innerText = e;
    chooseCompany.appendChild(option)
  })
}

//Catch the form and the answer container

const form = document.querySelector('form');
const answerCont = document.querySelector('.answer');

//When the user click send the form data to the endpoint and insert into database

form.onsubmit = (event) => {
  event.preventDefault();
  const { username, password, company, gender, birthplace, birthdate } = form.elements;

  const postReq = new XMLHttpRequest();
  postReq.open('POST', '/register');
  postReq.setRequestHeader('Content-Type', 'application/json');
  postReq.send(JSON.stringify({
    username: username.value,
    password: password.value,
    company: company.value,
    gender: gender.value,
    birthplace: birthplace.value,
    birthdate: birthdate.value
  }));
  postReq.onload = () => {
    const response = JSON.parse(postReq.responseText);
    responseRender(response, answerCont)
    console.log(response)
  }

  console.log(username.value, password.value, company.value, gender.value, birthplace.value, birthdate.value);
};

//Render the answer to the html 

const responseRender = (data, into) => {
  const h3 = document.createElement('h3');
  const pName = document.createElement('p');
  const pCompany = document.createElement('p');
  const pGender = document.createElement('p');
  const pBirthlace = document.createElement('p');
  const pBirthday = document.createElement('p');

  h3.innerText = `${data.message} where id = ${data.id}`;
  pName.innerText = `username: ${data.username}`;
  pCompany.innerText = `company: ${data.company}`;
  pGender.innerText = `gender: ${data.gender}`;
  pBirthlace.innerText = `birthplace: ${data.birthplace}`;
  pBirthday.innerText = `birthdaye: ${data.birthdate}`;

  into.appendChild(h3);
  into.appendChild(pName);
  into.appendChild(pCompany);
  into.appendChild(pGender);
  into.appendChild(pBirthlace);
  into.appendChild(pBirthday);

};