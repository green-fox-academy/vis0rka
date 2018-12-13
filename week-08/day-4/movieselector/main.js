const genreInput = document.querySelector('.genreInput')

const movies = document.querySelector('.movies');

const movies2 = document.querySelectorAll('.movies option');

const hidden = document.querySelector('.hidden');

const selectMovie = document.querySelector('.selectMovie');

hidden.style.display = 'none';

genreInput.addEventListener('change', e => {
  moviesearch(e.target.value);
  movies2.contentWindow.location.reload(true);
})

const moviesearch = (value) => {
  movies2.forEach(e => {
    if (e.className == value) {
      e.style.display = 'initial';
    } else {
      e.style.display = 'none';
    }
  })
}

movies.addEventListener('change', e => {
  selectMovie.innerHTML = e.target.value;
})
