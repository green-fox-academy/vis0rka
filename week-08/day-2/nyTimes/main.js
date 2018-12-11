console.log('hello');

function createNode(element) {
  return document.createElement(element);
}

function appendChild(parent, el) {
  return parent.appendChild(el);
}

const apiKey = '79d5a883cf9a4cbc8d35c23fb6075fd1';

const apiUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=Apollo_11&end_date=19710101`;


const articlesContainer = document.querySelector('.articles');


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
  let data = response.response.docs;
  console.log(data);
   data.forEach(e => {
    let articleList = createNode('ul');
    let headerText = createNode('li');
    let snippetText = createNode('li');
    let publicationDate = createNode('li');
    let articleLink = createNode('li');
    let aLink = createNode('a')

    headerText.innerText = e.headline.main;
    snippetText.innerText = e.snippet;
    publicationDate.innerText = e.pub_date;
    aLink.innerText = 'link to the article';

    headerText.classList.add('header1');
    snippetText.classList.add('snippet');
    publicationDate.classList.add('date');

    appendChild(articleLink, aLink);
    aLink.setAttribute('href', e.web_url);


    appendChild(articleList, headerText);
    appendChild(articleList, snippetText);
    appendChild(articleList, publicationDate);
    appendChild(articleList, articleLink)

    appendChild(articlesContainer,articleList);
  }); 

})