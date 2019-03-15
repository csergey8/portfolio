document.addEventListener("DOMContentLoaded", () => {
  
  console.log('hi');
});

var rellax = new Rellax('.rellax');


var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200
});
