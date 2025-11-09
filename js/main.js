let slideIndex = 1;
showSlides(slideIndex);

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-list-mobile ul");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
}

document.querySelectorAll(".nav-list-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".nav-list-mobile ul");
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
