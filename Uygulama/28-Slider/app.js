const slides = document.querySelectorAll(".slide");
const nextButon = document.querySelector(".nextBtn");
const prevButon = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextButon.addEventListener("click", () => {
  counter++;
  carousel();
});

prevButon.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
