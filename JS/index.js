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
  clearButton.addEventListener("click", clearForm);
  submitButton.addEventListener("click", submitForm);
}

const submitForm = event => {
  event.preventDefault();
  const inputFields = [username, email, password, repeatPassword];
  checkForm(inputFields);
}

const checkForm = inputFields => {
  inputFields.forEach(field => {
    if (field.value === "") {
      showError(field, field.placeholder);
    } else {
      clearError(field);
    }
  });
}

const showError = (field, msg) => {
  const formInput = field.parentElement;
  const errorParag = formInput.querySelector(".error-text");
  
  errorParag.style.display = "block";
  errorParag.textContent = msg;
}

const clearError = field => {
  const errorInput = field.parentElement;
  const errorParag = errorInput.querySelector(".error-text");

  errorParag.style.display = "none";
}

const clearForm = event => {
  event.preventDefault();
  const inputFields = [username, email, password, repeatPassword];

  inputFields.forEach(input => {
    input.value = "";
  });
}

document.addEventListener("DOMContentLoaded", main);