document.addEventListener("DOMContentLoaded", () => {
  const numberText = document.getElementById('number');
  
  numberText.addEventListener('click', () => {
    numberText.textContent = '+38(093)704-28-44';
  })
});

var rellax = new Rellax('.rellax');


var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200
});
