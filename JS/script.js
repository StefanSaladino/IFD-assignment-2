document.addEventListener("DOMContentLoaded", () => {
let currentSlide = 0;
const slides = document.getElementsByClassName('slides');

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[currentSlide].style.display = 'flex';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Automatically advance slides every 5 seconds
setInterval(nextSlide, 5000);
});