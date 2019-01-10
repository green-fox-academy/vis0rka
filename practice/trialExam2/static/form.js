console.log('hello')

const form = document.querySelector('form');

const inputs = document.querySelectorAll('form input[type="checkbox"]');


form.onsubmit = () => {
  event.preventDefault();
  inputs.forEach(e => {
    if(e.checked) {
      console.log( {
        [e.name]: e.value, 
      })
    }
  })
}