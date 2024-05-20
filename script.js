const leftArrowBtn = document.getElementById('leftArrowBtn');
const rightArrowBtn = document.getElementById('rightArrowBtn');
const movieList = document.querySelector('.movie-list-container');

leftArrowBtn.addEventListener('click', function() {
  movieList.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

rightArrowBtn.addEventListener('click', function() {
  movieList.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
