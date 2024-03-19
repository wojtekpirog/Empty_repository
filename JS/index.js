let username;
let email;
let password;
let repeatPassword;
let submitButton;
let clearButton;

const main = () => {
  getElements();
  addListeners();
}

const getElements = () => {
  username = document.querySelector("#username");
  email = document.querySelector("#email");
  password = document.querySelector("#password");
  repeatPassword = document.querySelector("#repeat-password");
  submitButton = document.querySelector("button.submit")
  clearButton = document.querySelector("button.reset")
}

const addListeners = () => {
  // clearButton.addEventListener("click", clearForm);
  // submitButton.addEventListener("click", submitForm);
}


document.addEventListener("DOMContentLoaded", main);