// RGB colours

//Variables to store HTML elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

//Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
document.getElementById("display").addEventListener("input", changeSize);
document.getElementById("width").addEventListener("input", changeSize);
document.getElementById("height").addEventListener("input", changeSize);
//Event Function
function rgbPreview() {
  //INPUT
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  // Validate Colours (Constrain colours between 0 - 255)

  // RED
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;

    // GREEN
  } else if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;

    // BLUE
  } else if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  //PROCESS
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // OUTPUT
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

//EVENT LISENTERS #2
document.getElementById("white").addEventListener("click", white);
document.getElementById("black").addEventListener("click", black);

function white() {
  document.getElementById("display").style.backgroundColor =
    "rgb(255, 255, 255)";
  rgbStringOutEl.innerHTML = "rgb(255, 255, 255)";
}

function black() {
  document.getElementById("display").style.backgroundColor = "rgba(0, 0, 0)";
  rgbStringOutEl.innerHTML = "rgb(0, 0, 0)";
}

//EVENT LISTENERS #3

function changeSize() {
  let width = +document.getElementById("width").value;
  let height = +document.getElementById("height").value;
  document.getElementById("display").style.width = `${width}px`;
  document.getElementById("display").style.height = `${height}px`;
  console.log(width);
  console.log(height);
}
