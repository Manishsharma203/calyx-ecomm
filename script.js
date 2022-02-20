const passwordToggle = () => {
  var passwordInput = document.querySelector("#password-input");
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
  } else {
    passwordInput.type = "text";
  }
};
var currentCarouselNumber = 0;
const totalCarouselNumber =
  document.getElementsByClassName("carousel-img").length;
let carouselImages = document.getElementsByClassName("carousel-img");
carouselImages[currentCarouselNumber].style.display = "block";
function pageNext() {
  if (
    currentCarouselNumber < totalCarouselNumber - 1 &&
    currentCarouselNumber >= 0
  ) {
    currentCarouselNumber++;
    for (let i = 0; i < totalCarouselNumber; i++) {
      if (i === currentCarouselNumber) {
        carouselImages[i].style.display = "block";
      } else {
        carouselImages[i].style.display = "none";
      }
    }
  }
}
function pagePrevious() {
  if (
    currentCarouselNumber > 0 &&
    currentCarouselNumber <= totalCarouselNumber - 1
  ) {
    currentCarouselNumber--;
    for (let i = 0; i < totalCarouselNumber; i++) {
      if (i === currentCarouselNumber) {
        carouselImages[i].style.display = "block";
      } else {
        carouselImages[i].style.display = "none";
      }
    }
  }
}
window.onload = function () {
  setInterval(() => {
    if (currentCarouselNumber === totalCarouselNumber - 1) {
      currentCarouselNumber = 0;
      carouselImages[0].style.display = "block";
      for (let i = 1; i < totalCarouselNumber; i++) {
        carouselImages[i].style.display = "none";
      }
    } else {
      pageNext();
    }
  }, 2000);
};
