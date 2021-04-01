const numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Use a for-loop to attach a click event listener on every button.
// When the user clicks on a button, respective sound and button animation will be played.
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
}


// Attach a keydown event to the document.
// When the user presses key 'w', 'a', 's', 'd', 'j', 'k', 'l', respective sound and button animation will be played.

document.addEventListener("keydown", event => {
  playSound(event.key);
  animateButton(event.key);
});



const playSound = key => {
  // Use conditionals to play different sounds upon different key presses.
  // Example to play tom-1.mp3 in sounds/directory:
  // const tom1 = new Audio("sounds/tom-1.mp3");
  // tom1.play();
  switch (key) {
    case "w":
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log(key);
  }

}



// 
const animateButton = currentKey => {
  const activeButton = document.querySelector("." + currentKey);
  // Add "pressed" class to the active button here
  activeButton.classList.add("pressed");
  setTimeout(() => {
    // Remove "pressed" class from the active button here
    activeButton.classList.remove("pressed");
  }, 100);
}

