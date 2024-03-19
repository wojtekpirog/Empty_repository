let pageHeading;
let username;
let email;
let password;
let repeatPassword;
let submitButton;
let clearButton;

const main = () => {
  getElements();
  calculateHeight();
  addListeners();
}

const getElements = () => {
  pageHeading = document.querySelector("h1");
  username = document.querySelector("#username");
  email = document.querySelector("#email");
  password = document.querySelector("#password");
  repeatPassword = document.querySelector("#repeat-password");
  submitButton = document.querySelector("button.submit")
  clearButton = document.querySelector("button.reset")
}

const calculateHeight = () => {
  const headingHeight = pageHeading.offsetHeight;
  document.querySelector("main").style.height = `calc(100% - ${headingHeight}px)`;
}

const addListeners = () => {
  // clearButton.addEventListener("click", clearForm);
  // submitButton.addEventListener("click", submitForm);
}


document.addEventListener("DOMContentLoaded", main);