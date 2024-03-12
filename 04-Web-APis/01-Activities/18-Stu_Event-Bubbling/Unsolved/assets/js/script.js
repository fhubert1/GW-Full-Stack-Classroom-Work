// TODO: Which element is the following line of code selecting?
// selecting the carousel box element surronding the images
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// selecting the next and prev class buttons
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// open the image that is displaying
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// add event listener to the next class 
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // stop the triggering of the carousel which would open the image
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// add event listener to prev class ....call navigate to change impage
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // stop the triggering of the carousel which would open the image

  event.stopPropagation();

  navigate(-1);
});

navigate(0);
