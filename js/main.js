let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
for (let index = 1; index <= slidesCount; index++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", index);
    paginationItem.appendChild(document.createTextNode(index));
    paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);
let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
    document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
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
    slideNumberElement.textContent =
        "slide #" + currentSlide + "of" + slidesCount;
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
    sliderImages.forEach((slide) => {
        slide.classList.remove("active");
    });
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove("active");
    });
}
// skills
let section = document.querySelector(".skills");
let progSpans = document.querySelectorAll(".progress span");
window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 200) {
        console.log("section is here");
        progSpans.forEach((spano) => {
            spano.style.width = spano.dataset.width;
        });
    }
};
let switcherList = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery div");
window.onload = function() {
    document.querySelectorAll(".info").forEach((el) => {
        el.style.display = "block";
    });
};
switcherList.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImg);
});

function removeActive() {
    switcherList.forEach((li) => {
        li.classList.remove("activdiv");
        this.classList.add("activdiv");
    });
}

function manageImg() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}