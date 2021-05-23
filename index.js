const hamburger = document.querySelector(".fa-bars");
// console.log(hamburger);

var typed = new Typed(".typing", {
  strings: ["Web Developer", "Freelancer", "Front End Developer", "Author"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Web Developer", "Freelancer", "Front End Developer", "Author"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// handle navbar
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
});

hamburger.addEventListener("click", () => {
  if (hamburger) {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  }
});
