/*

var img = document.getElementsByClassName("fullSize");
img.onclick = function(){
   classList.toggle("fullSize");
  
  }

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#fullSize").classList.add("hide");
  document.querySelector("#clickpic").addEventListener("click", showFull);
}

function showFull() {
  document.querySelector("#fullSize").classList.remove("hide");

  document.querySelector("#closepic").addEventListener("click", showNone);
}

function showNone() {
  document.querySelector("#fullSize").classList.add("hide");
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("webshopimg");
var modalImg = document.getElementById("img01");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};
*/
var zoom = document.querySelector("img");

zoom.addEventListener("click", function () {
  zoom.classList.toggle("fullSize");
});

var button = document.querySelector(".button");
var div = document.querySelector(".subgallery");

button.addEventListener("click", function () {
  div.classList.toggle("subgallery3");
});
