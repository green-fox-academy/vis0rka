
/* Catch the elements */ 

const maincontent = document.querySelector('.maincontent');

const apiUrl = 'http://secure-reddit.herokuapp.com/posts';

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
  data = response.posts
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
    postContRend(element,postSection);
  });
}

const voteSecRend = (element, target) => {
  let arrowUp = document.createElement('img');
  arrowUp.setAttribute('src', 'file:///C:/greenfox/vis0rka/week-08/day-5/theReddit/images/upvote.png');

  let p = document.createElement('p');
  p.innerText = element.score;

  let arrowDown = document.createElement('img');
  arrowDown.setAttribute('src', 'file:///C:/greenfox/vis0rka/week-08/day-5/theReddit/images/downvote.png');

  target.appendChild(arrowUp);
  target.appendChild(p);
  target.appendChild(arrowDown);
}


const postContRend = (element, target) => {
  let title = document.createElement('h4');
  title.innerText = element.title;

  let p = document.createElement('p');
  let userText = document.createElement('h5');
  

  userText.innerText = checkUser(element.user);
  
  p.innerText = `submitted ${timer(element.timestamp)} hour ago by`;
  p.appendChild(userText);
  
  target.appendChild(title);
  target.appendChild(p);
}

const timer = (elementTime) => {
  let date = Date.now()
  let ago = date-elementTime;
  let dayscounter = Math.floor(ago/3600000);
  return dayscounter;
}

const checkUser = (user) => {
  if (user !== null) {
    return user
  } else return 'anonymus'
}