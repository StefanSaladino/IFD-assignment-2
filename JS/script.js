document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  //slides are each element in the "slides" class
  const slides = document.getElementsByClassName("slides");
  //lines are each element with a "line" class
  const lines = document.getElementsByClassName("line");
  //first element called hamburger-icon is assigned the hamburgerIcon variable
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  //first element called menu-items is assigned the hamburgerIcon variable
  const menuItems = document.querySelector(".menu-items");
  

  //when the page loads, the first line (on the left) will be highlighted
  lines[0].classList.add("highlight");

  // Add event listener to each line
  // when a line is clicked, the showSlide function is called, set to the corresponding slide
  for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener("click", function () {
      showSlide(i);
    });
  }

  //defining showSlide function
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
    //ensuring only one slide is displayed at a time
    slides[currentSlide].style.display = "flex";

    //removing the highlight class from each line so multiple lines arent highlighted
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.remove("highlight");
    }

    //the line corresponding to the current slide is highlighted
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

  //opens burger menu on click
  hamburgerIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    menuItems.classList.toggle("show");
    
  });

  const prevArrow = document.querySelector(".arrow-left");
  const nextArrow = document.querySelector(".arrow-right");

  //click events to each arrow calling a function
  prevArrow.addEventListener("click", previousSlide);
  nextArrow.addEventListener("click", nextSlide);
});
