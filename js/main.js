// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
//creat ul
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
for (let index = 1; index <= slidesCount; index++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", index);
    paginationItem.appendChild(document.createTextNode(index));
    paginationElement.appendChild(paginationItem);
}
//add created ul to page
document.getElementById("indicators").appendChild(paginationElement);

function nextSlide() {
    console.log("prev");
}

function prevSlide() {
    console.log("d");
}