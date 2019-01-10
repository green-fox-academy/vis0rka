console.log('hello')

const form = document.querySelector('form');

const inputs = document.querySelectorAll('form input[type="checkbox"]');


form.onsubmit = () => {
  event.preventDefault();
  let array = [];
  inputs.forEach(e => {
    if(e.checked) {
       array.push({[e.name]:e.value})
    }
  })
  console.log(array)
}

