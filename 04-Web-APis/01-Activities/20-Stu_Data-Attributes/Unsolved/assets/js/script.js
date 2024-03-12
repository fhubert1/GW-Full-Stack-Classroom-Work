var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  
  // TODO: Complete function
  // Check if the clicked element was an image
  if (element.matches("div.box")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");
    var boxNum = element.getAttribute("data-number");

    if (state === "hidden" && boxNum === "1") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "visible";
      element.innerHTML = 1;
      element.setAttribute("data-state", "visible");
    } else if (state === "hidden" && boxNum === "3") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "visible";
      element.innerHTML = 3;
      element.setAttribute("data-state", "visible");
    } else if (state === "hidden" && boxNum === "5") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "visible";
      element.innerHTML = 5;
      element.setAttribute("data-state", "visible");
    } else {
      element.dataset.state = "hidden";
      element.innerHTML = "";
      element.setAttribute("data-state", "hidden");
    }    

    
  }
});
