let header;
let container;
let priceInput;

const main = () => {
  getElements();
  addListeners();
}

const getElements = () => {
  header = document.querySelector("header");
  container = document.querySelector(".container");
  priceInput = document.querySelector("#price");
  container.style.height = `calc(100vh - ${header.offsetHeight}px)`;
}

const addListeners = () => {
  priceInput.addEventListener("input", logValue);
}

const logValue = (event) => {
  console.log(event.target.value);
}

document.addEventListener("DOMContentLoaded", main);