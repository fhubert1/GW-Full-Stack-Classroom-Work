var  titleKey = document.querySelector("#key");
var  titleCode = document.querySelector("#code");
var  titleStatus = document.querySelector("#status");

function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault();
  titleKey.textContent = event.key;
  titleStatus.textContent = "KEYDOWN Event";
  titleCode.textContent = event.keyCode;

}

function keyupAction() {
  event.preventDefault();
  titleStatus.textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction)
