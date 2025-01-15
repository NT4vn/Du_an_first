let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slides img");
  if (n >= slides.length) {
    slideIndex = 0; // Loop back to the first slide
  }
  if (n < 0) {
    slideIndex = slides.length - 1; // Loop to the last slide if going backwards from the first slide
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", (event) => {
  autoSlide();
});
