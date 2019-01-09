// load the deatils to the front End
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
};

sendHttpRequest('GET', `/user${window.location.pathname}`, (response) => {
  console.log(response);
  render(response);
  const userID = response[0].id
  const mBtn = document.querySelector('.modifyBtn');

  mBtn.onclick = () => {
    addForm(response, container);
    console.log(mBtn);
    mBtn.style.display = 'none';

    const form = document.querySelector('form');
    // When the user updated the details
    form.onsubmit = (event) => {
      event.preventDefault();
      const { username, password, company, gender, birthplace, birthdate } = form.elements;

      const postReq = new XMLHttpRequest();
      postReq.open('PATCH', '/update');
      postReq.setRequestHeader('Content-Type', 'application/json');
      postReq.send(JSON.stringify({
        id: userID,
        username: username.value,
        password: password.value,
        company: company.value,
        gender: gender.value,
        birthplace: birthplace.value,
        birthdate: birthdate.value
      }));
      postReq.onload = () => {
        const newuserDetails = JSON.parse(postReq.responseText);
        console.log(newuserDetails);
        render(newuserDetails);
      }
    };
  }
});
//Render the list from user details
const render = (data) => {
  container.innerHTML = '';
  const ul = document.createElement('ul');
  data.forEach(element => {
    const liName = document.createElement('li');
    const liGender = document.createElement('li');
    const liCompany = document.createElement('li');
    const liBirthplace = document.createElement('li');
    const liBirthday = document.createElement('li');

    const btn = document.createElement('button');

    liName.innerText = element.name;
    liGender.innerText = element.gender;
    liCompany.innerText = element.company;
    liBirthplace.innerText = element.birthplace;
    liBirthday.innerText = element.birthday.slice(0, 10);

    btn.classList.add('modifyBtn');
    btn.innerText = 'Módosít';

    ul.appendChild(liName);
    ul.appendChild(liGender);
    ul.appendChild(liCompany);
    ul.appendChild(liBirthplace);
    ul.appendChild(liBirthday);

    container.appendChild(ul);
    container.appendChild(btn);
  });
};

const updateUserdetails = () => {

}
// add from with values when user click modify
const addForm = (data, target) => {
  const formCont = document.createElement('div');
  let ischeckedMale;
  let ischeckedFemale;
  if (data.gender === 'Male') {
    ischeckedMale = true;
    ischeckedFemale = false;
  } else {
    ischeckedFemale = true;
    ischeckedMale = false;
  }

  formCont.innerHTML = `
  <form>
  <label for="username">Username</label>
  <input type="text" placeholder="username" name="username" required value='${data[0].name}'>
  <label for="password">Password</label>
  <input type="text" placeholder="Password" name="password" required value='${data[0].password}'>
  <label>Company</label>
  <input type="text" placeholder="Company" name="company" required value='${data[0].company}'>
  <div>
  <label for="gender">Genre</label>
  <input type="radio" name="gender" value="Male" checked="${ischeckedMale}"><span>male</span>
  <input type="radio" name="gender" value="Female" checked="${ischeckedFemale}"><span>female</span>
  </div>
  <label>Birthplace</label>
  <input type="text" placeholder="birthplace" name="birthplace" value='${data[0].birthplace}'>
  <label>Birthday</label>
  <input type="date" name="birthdate" value='${data[0].birthday.slice(0, 10)}'>
  <input type="submit">
  </form>`
  target.appendChild(formCont);
};