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

const container = document.querySelector('.container');



sendHttpRequest(baseURL, 'GET', (response) => {
  console.log(response);
  const data = response.rows;
  render(data);
  categoryAdder(data);
  publisherAdder(data);
})


/*  RENDER FUNCTION */

const render = (data) => {
  container.innerHTML = '';
  
  

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
    trTitle.innerText = element.book_name;

    tdTitle.appendChild(trTitle);
    table.appendChild(tdTitle);

    const trAuthor = document.createElement('tr');
    trAuthor.innerText = element.aut_name;

    tdAuthor.appendChild(trAuthor);
    table.appendChild(tdAuthor);

    const trCategory = document.createElement('tr');
    trCategory.innerText = element.cate_descrip;

    tdCategory.appendChild(trCategory);
    table.appendChild(tdCategory);

    const trPublisher = document.createElement('tr');
    trPublisher.innerText = element.pub_name;

    tdPublisher.appendChild(trPublisher);
    table.appendChild(tdPublisher);

    const trPrice = document.createElement('tr');
    trPrice.innerText = element.book_price;

    tdPrice.appendChild(trPrice);
    table.appendChild(tdPrice);
  });
}

/*  SEARCH FUNCTION */


const categoryInput = document.querySelector('.categoryInput')

const categoryAdder = (data) => {
  const tempArray = ['All',];
  data.forEach(e => {
    if (tempArray.indexOf(e.cate_descrip) == -1) {
      tempArray.push(e.cate_descrip)
    }
  })
  tempArray.forEach(e => {
    const option = document.createElement('option');
    option.setAttribute('value', e);
    option.innerText = e;
    categoryInput.appendChild(option)
  })
}

const publisherInput = document.querySelector('.publisherInput')

const publisherAdder = (data) => {
  const tempArray = ['All',];
  data.forEach(e => {
    if (tempArray.indexOf(e.pub_name) == -1) {
      tempArray.push(e.pub_name)
    }
  })
  tempArray.forEach(e => {
    const option = document.createElement('option');
    option.setAttribute('value', e);
    option.innerText = e;
    publisherInput.appendChild(option)
  })
}

/* Event listener */

/* categoryInput.addEventListener('change', event => {
  if (event.target.value == 'All') {
    sendHttpRequest(baseURL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      categoryInput.innerHTML = '';
      categoryAdder(data);
    });
  } else {
    URL = `http://localhost:3000/author?category=${event.target.value}`
    sendHttpRequest(URL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      publisherInput.innerHTML = '';
      publisherAdder(data);
    });
  }
})

publisherInput.addEventListener('change', event => {
  if (event.target.value == 'All') {
    sendHttpRequest(baseURL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      categoryInput.innerHTML = '';
      categoryAdder(data);
    });
  } else {
    URL = `http://localhost:3000/author?publisher=${event.target.value}`
    sendHttpRequest(URL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      categoryInput.innerHTML = '';
      categoryAdder(data);
    });
  }
}) */

const submit = document.querySelector('.priceLtn')

submit.onsubmit = (event) => {
  event.preventDefault();
  const catVal =categoryInput.value;
  const pubVal = publisherInput.value;
  const priceLtnVal = document.querySelector('#priceLtn').value;
  console.log(catVal, pubVal)

  URL = `http://localhost:3000/author?category=${catVal}&publisher=${pubVal}`
  sendHttpRequest(URL, 'GET', (response) => {
    const data = response.rows;
    render(data);
    publisherInput.innerHTML = '';
    publisherAdder(data);
    categoryInput.innerHTML = '';
    categoryAdder(data);
  });
}