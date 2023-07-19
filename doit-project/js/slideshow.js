let slides = document.querySelectorAll("#slides > img");
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");

let current = 0;

showSlide(current);
prevbtn.addEventListener("click", prevSlide);
nextbtn.addEventListener("click", nextSlide);

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
function prevSlide() {
  if (current > 0) {
    current -= 1;
  } else {
    current = slides.length - 1;
  }
  showSlide(current);
}
function nextSlide() {
  if (current < slides.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  showSlide(current);
}

// autoSlides();

// function autoSlides() {
//   let slides = document.querySelectorAll("#slides > img");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   if (current > slides.length - 1) {
//     current = 0;
//   }
//   slides[current].style.display = "block";
//   current++;
//   setTimeout(autoSlides, 3000);
// }
