
// Precautions in case brower not support html5
document.createElement("article");
document.createElement("aside");
document.createElement("footer");
document.createElement("header");
document.createElement("nav");
document.createElement("section");
document.createElement("time");
  
  /* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "50%";
  document.getElementById("openbtn").style.visibility = "hidden";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("openbtn").style.visibility = "visible";
}

// Get the modal and insert a clicked image
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modal-image");
let captionText = document.getElementById("caption");


function modalFunction(image) {
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
}

function closeModel() {
  modal.style.display = "none";
}

// expand and collapse blog article
let expand = document.getElementById("expand");
let paraContainer = document.getElementById("para-container");

function expandFunction() {
  expand.style.display = "none";
  paraContainer.style.display = "block";
}

function collapseFunction() {
  paraContainer.style.display = "none";
  expand.style.display = "inline-block";
} 