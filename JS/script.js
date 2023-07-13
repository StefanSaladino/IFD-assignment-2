document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.getElementsByClassName("slides");
  const lines = document.getElementsByClassName("line");

  lines[0].classList.add("highlight");

  // Add event listener to each line
  for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener("click", function () {
      showSlide(i);
    });
  }

  function showSlide(n) {
    //if n is less than 0, it resets the value to the last slide
    //if n is higher than the last index place, it sets the slide back to index 0
    if (n < 0) {
      currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = n;
    }

    //this sets all classes tagged "slides" to hidden
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    //the currentSlide is set to a display of flex to remain congruent with the CSS
    slides[currentSlide].style.display = "flex";

    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.remove("highlight");
    }

    lines[currentSlide].classList.add("highlight");
  }

  //adds 1 to the current slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  //subtracts 1 from the current slide
  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  // Automatically advance slides every 5 seconds
  setInterval(nextSlide, 5000);

  const prevArrow = document.querySelector(".arrow-left");
  const nextArrow = document.querySelector(".arrow-right");

  prevArrow.addEventListener("click", previousSlide);
  nextArrow.addEventListener("click", nextSlide);
});

