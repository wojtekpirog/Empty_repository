let nav;
let burgerBtn;
let navbarItems;

const main = () => {
  getElements();
  addListeners();
}

const getElements = () => {
  nav = document.querySelector(".navbar");
  burgerBtn = document.querySelector(".burger-btn");
  navbarItems = document.querySelectorAll(".navbar__item");
}

const addListeners = () => {
  burgerBtn.addEventListener("click", toggleNavbar);

  navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener("click", closeNavbar);
  });
}

const toggleNavbar = () => {
  nav.classList.toggle("navbar--active");
  handleNavItemAnimation();
}

const closeNavbar = () => {
  nav.classList.remove("navbar--active");
}

const handleNavItemAnimation = () => {
  let delay = 0;

  navbarItems.forEach((navbarItem) => {
    navbarItem.classList.toggle("navbar__item--animation");
    navbarItem.style.animationDelay = `${delay}ms`;
    delay += 100;
  });
}

window.addEventListener("DOMContentLoaded", main);