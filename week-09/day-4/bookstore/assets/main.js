console.log('hello')

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
const baseURL = 'http://localhost:3000/author';

const container = document.querySelector('.container')

sendHttpRequest(baseURL, 'GET', (response) => { 
  const data = response.rows;
  console.log(data);

  const table = document.createElement('table');
  container.appendChild(table)

  const tdTitle = document.createElement('td');
  tdTitle.innerText = 'Book title';

  const tdAuthor = document.createElement('td');
  tdAuthor.innerText = 'Author name';

  const tdCategory = document.createElement('td');
  tdCategory.innerText = 'Category';

  const tdPublisher = document.createElement('td');
  tdPublisher.innerText = 'Publisher name';

  const tdPrice = document.createElement('td');
  tdPrice.innerText = 'Price';
  
  data.forEach(element => {
    const trTitle = document.createElement('tr');
    trTitle.innerText = element.book_title;

    tdTitle.appendChild(trTitle);
    table.appendChild(tdTitle);

    const trAuthor = document.createElement('tr');
    trAuthor.innerText = element.authors_name;

    tdAuthor.appendChild(trAuthor);
    table.appendChild(tdAuthor);

    const trCategory = document.createElement('tr');
    trCategory.innerText = element.category;

    tdCategory.appendChild(trCategory);
    table.appendChild(tdCategory);

    const trPublisher = document.createElement('tr');
    trPublisher.innerText = element.publishers_name;

    tdPublisher.appendChild(trPublisher);
    table.appendChild(tdPublisher);

    const trPrice = document.createElement('tr');
    trPrice.innerText = element.price;

    tdPrice.appendChild(trPrice);
    table.appendChild(tdPrice);
  });
})