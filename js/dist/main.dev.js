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
  if (window.scrollY >= section.offsetTop) {
    console.log("section is here");
    progSpans.forEach(function (spano) {
      spano.style.width = spano.dataset.width;
    });
  }
};

var switcherList = document.querySelectorAll(".switcher li");
var imgs = document.querySelectorAll(".gallery div");

window.onload = function () {
  document.querySelectorAll(".info").forEach(function (el) {
    el.style.display = "block";
  });
};

switcherList.forEach(function (li) {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImg);
});

function removeActive() {
  var _this = this;

  switcherList.forEach(function (li) {
    li.classList.remove("activdiv");

    _this.classList.add("activdiv");
  });
}

function manageImg() {
  imgs.forEach(function (img) {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach(function (el) {
    el.style.display = "block";
  });
}

var upSpan = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 2500) {
    upSpan.classList.add("show");
  } else {
    upSpan.classList.remove("show");
  }
};