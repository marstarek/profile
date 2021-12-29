"use strict";

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById("slide-number");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (var index = 1; index <= slidesCount; index++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", index);
  paginationItem.appendChild(document.createTextNode(index));
  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);
var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent = "slide #" + currentSlide + "of" + slidesCount;
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImages.forEach(function (slide) {
    slide.classList.remove("active");
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
} // skills


var section = document.querySelector(".skills");
var progSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    console.log("section is here");
    progSpans.forEach(function (spano) {
      spano.style.width = spano.dataset.width;
    });
  }
};