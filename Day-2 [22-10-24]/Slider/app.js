// My Code

// var imgs = document.querySelectorAll(".slider img");
// var dots = document.querySelectorAll(".dot");
// var currentImg = 0; // index of the first image
// const interval = 3000; // duration(speed) of the slide

// function changeSlide(n) {
//   for (var i = 0; i < imgs.length; i++) {
//     // reset all images and dots
//     imgs[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   if (n !== undefined) {
//     currentImg = n; // if a specific slide is clicked
//   }

//   imgs[currentImg].style.opacity = 1; // show the current image
//   dots[currentImg].className += " active"; // activate the current dot
// }

// var timer = setInterval(function () {
//   currentImg = (currentImg + 1) % imgs.length; // update the index
//   changeSlide();
// }, interval);

// // Event listener for manual dot click
// function manualSlide(n) {
//   clearInterval(timer); // stop the automatic sliding when clicked
//   changeSlide(n); // change to the clicked slide
//   timer = setInterval(function () {
//     currentImg = (currentImg + 1) % imgs.length; // resume automatic sliding
//     changeSlide();
//   }, interval);
// }

// Teacher

var imgs = document.querySelectorAll(".slider img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; // index of the first image
const interval = 3000; // duration(speed) of the slide
function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }
  currentImg = n !== undefined ? n : (currentImg + 1) % imgs.length;
  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}
var timer = setInterval(changeSlide, interval);

function manualChange(n) {
  clearInterval(timer);
  changeSlide(n);
  timer = setInterval(changeSlide, interval);
}
changeSlide(currentImg);
