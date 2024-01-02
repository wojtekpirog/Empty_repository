const burgerBtn = document.querySelector("button.burger");
const barsIco = document.querySelector("i.fa-bars");
const xIco = document.querySelector("i.fa-times");
const nav = document.querySelector("nav ul");

const toggleMenu = () => {
  nav.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  barsIco.classList.toggle("hide");
  xIco.classList.toggle("hide");
}

burgerBtn.addEventListener("click", toggleMenu);
