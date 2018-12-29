
const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
};

const baseURL = 'http://localhost:3000/alldata';

const container = document.querySelector('.container');


sendHttpRequest(baseURL, 'GET', (response) => {
  console.log(response);
  const data = response.rows;
  render(data);
  categoryAdder(data);
  publisherAdder(data);
});


/*  RENDER FUNCTION */

const render = (data) => {
  container.innerHTML = '';
    

  const table = document.createElement('table');
  container.appendChild(table)

  const thTitle = document.createElement('th');
  thTitle.innerText = 'Book title';

  const thAuthor = document.createElement('th');
  thAuthor.innerText = 'Author name';

  const thCategory = document.createElement('th');
  thCategory.innerText = 'Category';

  const thPublisher = document.createElement('th');
  thPublisher.innerText = 'Publisher name';

  const thPrice = document.createElement('th');
  thPrice.innerText = 'Price';

  const trHead = document.createElement('tr');

  trHead.appendChild(thTitle);
  trHead.appendChild(thAuthor);
  trHead.appendChild(thCategory);
  trHead.appendChild(thPublisher);
  trHead.appendChild(thPrice);

  table.appendChild(trHead);

  data.forEach(element => {

    const trNorm = document.createElement('tr');
    
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdCategory = document.createElement('td')
    const tdPublisher = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdTitle.innerText = element.book_name;
    tdAuthor.innerText = element.aut_name;
    tdCategory.innerText = element.cate_descrip;
    tdPublisher.innerText = element.pub_name;
    tdPrice.innerText = element.book_price;

    trNorm.appendChild(tdTitle);
    trNorm.appendChild(tdAuthor);
    trNorm.appendChild(tdCategory);
    trNorm.appendChild(tdPublisher);
    trNorm.appendChild(tdPrice);    

    table.appendChild(trNorm);
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

/* Event listener for category and publisher */

 categoryInput.addEventListener('change', event => {
  if (event.target.value == 'All') {
    sendHttpRequest(baseURL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      categoryInput.innerHTML = '';
      categoryAdder(data);
    });
  } else {
    URL = `http://localhost:3000/filter?category=${event.target.value}`
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
      publisherInput.innerHTML = '';
      publisherAdder(data);
    });
  } else {
    URL = `http://localhost:3000/filter?publisher=${event.target.value}`
    sendHttpRequest(URL, 'GET', (response) => {
      const data = response.rows;
      render(data);
      categoryInput.innerHTML = '';
      categoryAdder(data);
    });
  }
}) 

/* Add multiple function for Search fields */

const submit = document.querySelector('.priceGtn');

submit.onsubmit = (event) => {
  event.preventDefault();
  const catVal = categoryInput.value;
  const pubVal = publisherInput.value;
  const priceLtnVal = document.querySelector('#priceLtn').value;
  const priceGtnVal = document.querySelector('#priceGtn').value;
  console.log(catVal, pubVal, priceLtnVal, priceGtnVal)

  URL = `http://localhost:3000/filter?category=${catVal}&publisher=${pubVal}&priceLtn=${priceLtnVal}&priceGtn=${priceGtnVal}`
  sendHttpRequest(URL, 'GET', (response) => {
    const data = response.rows;
    render(data);
    publisherInput.innerHTML = '';
    publisherAdder(data);
    categoryInput.innerHTML = '';
    categoryAdder(data);
  });
}