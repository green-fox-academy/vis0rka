console.log('hello')
/* Catch the elements */

const maincontent = document.querySelector('.maincontent');

const apiUrl = 'http://localhost:3000/posts';

/* Set the AJAX */

const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}

sendHttpRequest(apiUrl, 'GET', (response) => {
  const data = response.rows
  console.log(data);
  renderDiv(data);
})

/* Functions */

const renderDiv = (data) => {
  data.forEach(element => {
    const div = document.createElement('div');


    div.classList.add('posts');
    maincontent.appendChild(div);

    const voteSection = document.createElement('div');
    voteSection.classList.add('votesection');
    div.appendChild(voteSection);
    voteSecRend(element, voteSection);

    const postSection = document.createElement('div');
    postSection.classList.add('postcontent');
    div.append(postSection);
    postContRend(element, postSection);
  });
}

const voteSecRend = (element, target) => {
  const arrowUp = document.createElement('div');
  arrowUp.classList.add('arrowUp');
  arrowUp.setAttribute('data-id', element.id);

  const p = document.createElement('p');
  p.innerText = element.score;

  const arrowDown = document.createElement('div');
  arrowDown.classList.add('arrowDown');
  arrowDown.setAttribute('data-id', element.id);

  target.appendChild(arrowUp);
  target.appendChild(p);
  target.appendChild(arrowDown);
}


const postContRend = (element, target) => {
  const title = document.createElement('h4');
  title.innerText = element.title;

  const div = document.createElement('div');
  const pLink = document.createElement('p');

  pLink.innerText = element.url
  pLink.classList.add('pLink')

  const p = document.createElement('p');
  const userText = document.createElement('h5');

  userText.innerText = checkUser(element.user);

  p.innerText = `submitted ${timer(element.timestamp)} hour ago by`;

  const pDelete = document.createElement('p');
  pDelete.classList.add('pDelete');
  pDelete.setAttribute('id', element.id);
  pDelete.innerText = 'Delete post';

  p.appendChild(userText);

  div.appendChild(pLink);

  target.appendChild(title);
  target.appendChild(div)
  target.appendChild(p);

  target.appendChild(pDelete);
}

const timer = (elementTime) => {
  const date = Date.now()
  const ago = date - elementTime;
  const dayscounter = Math.floor(ago / 3600000);
  return dayscounter;
}

const checkUser = (user) => {
  if (user !== null || user !== undefined) {
    return user
  } else return 'anonymus'
}



maincontent.addEventListener('click', (event) => {

  if (event.target.className == 'pDelete') {
    console.log(event.target.id)
    const deleteXHR = new XMLHttpRequest();
    deleteXHR.open('DELETE', '/posts');
    deleteXHR.setRequestHeader('Content-Type', 'application/json');
    deleteXHR.send(JSON.stringify({
      id: event.target.id,
    }))
    deleteXHR.onload = () => {
      console.log(JSON.parse(deleteXHR.responseText));
    }
  }
  if (event.target.className == 'arrowUp') {
    voteUp(event.target);
  }
  if (event.target.className == 'arrowDown') {
    voteDown(event.target);
  }

});

const voteUp = (upVoteEvent) => {
  const upVoteXhr = new XMLHttpRequest();
  upVoteXhr.open('POST', `posts/${upVoteEvent.dataset.id}/upvote`);
  upVoteXhr.send();
  upVoteXhr.onload = () => {
    console.log(JSON.parse(upVoteXhr.responseText));
  }

}

const voteDown = (voteDownEvent) => {
  const vodeDownXhr = new XMLHttpRequest();
  vodeDownXhr.open('POST', `posts/${voteDownEvent.dataset.id}/downvote`);
  vodeDownXhr.send();
  vodeDownXhr.onload = () => {
    console.log(JSON.parse(vodeDownXhr.responseText));
  }

}