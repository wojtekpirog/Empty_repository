let header;
let container;
let amount;
let people;
let tipSelect;
let calculateBtn;
let errorBox;
let costInfo;

const main = () => {
  getElements();
  addListeners();
}

const getElements = () => {
  header = document.querySelector("header");
  container = document.querySelector(".container");
  amount = document.querySelector("#price");
  people = document.querySelector("#people");
  tipSelect = document.querySelector("#tip");
  calculateBtn = document.querySelector(".calculate");
  errorBox = document.querySelector(".error-box");
  costInfo = document.querySelector(".cost-info");
  container.style.height = `calc(100vh - ${header.offsetHeight}px)`;
}

const addListeners = () => {
  // priceInput.addEventListener("input", logValue);
  calculateBtn.addEventListener("click", calculateTip);
}

const calculateTip = () => {
  if (!amount.value || !people.value) {
    errorBox.textContent = "Podaj zarówno kwotę, jak i liczbę osób!";
  } else if (people.value < 2 || people.value > 10) {
    errorBox.textContent = "Podaj liczbę osób pomiędzy 2 a 10!";
  } else {
    errorBox.textContent = "";
    const tip = amount.value * tipSelect.value;
    const result = (parseFloat(amount.value) + tip) / people.value;
    costInfo.style.display = "block";
    costInfo.textContent = `Każdy z Was powinien złożyć się po ${result.toFixed(2)} zł.`;
  }
}

const logValue = (event) => {
  console.log(event.target.value);
}

document.addEventListener("DOMContentLoaded", main);