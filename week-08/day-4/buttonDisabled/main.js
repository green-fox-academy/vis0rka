

const favPets = document.querySelector('.formFavPet')

const cats = document.querySelector('.cats');
const signUp = document.querySelector('.signUp');

const catFacts = document.querySelector('.catFacts');

favPets.addEventListener('click', (e) =>{
  if (e.target.id == 'dog' || e.target.id == 'cat' && e.target.checked) {
    cats.disabled = false;
  } else if (e.target.id == 'viktor' && e.target.checked) {
    signUp.disabled = false;
  }
})

console.log(catFacts)

catFacts.addEventListener('click', (e) =>{
  if (e.target.id == 'catyes' || e.target.id == 'catno' && e.target.checked ) {
    signUp.disabled = true;
  } else if (e.target.id == 'catyes' && e.target.checked) {
    signUp.disabled = false;
  }
})

cats.addEventListener('click', (e) => {
  alert(`Thank you, you've successfully signed up for cat facts`);
})

signUp.addEventListener('click', (e) => {
  alert(`Sigh, we still added you to the cat facts list`)
})