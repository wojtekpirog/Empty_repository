const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");

const letterC = document.querySelector(".letterC");
const letterF = document.querySelector(".letterF");
let fahrenheit;
let celsius;

// T(°F) = (T(°C) * 1.8) + 32;
// T(°C) = (T(°F) - 32) / 1.8;

const swapLetters = () => {
  if (letterC.innerText === "°C") {
    letterC.innerText = "°F";
    letterF.innerText = "°C";
    result.textContent = "";
  } else {
    letterC.innerText = "°C";
    letterF.innerText = "°F";
    result.textContent = "";
  }
}

const convertCtoF = () => {
  fahrenheit = (parseFloat(converter.value) * 1.8) + 32;
  result.textContent = `${converter.value}°C = ${fahrenheit.toFixed(2)}°F`;  
}

const convertFtoC = () => {
  celsius = (parseFloat(converter.value) - 32) / 1.8;
  result.textContent = `${converter.value}°F = ${celsius.toFixed(2)}°C`;  
}

const convert = () => {
  if (!converter.value) {
    result.style.color = "tomato";
    result.textContent = "Nie podano wartości do konwersji!";
  } else {
    result.style.color = "white";
    if (letterC.innerText === "°C") {
      convertCtoF();
    } else {
      convertFtoC();
    }    
  }
  converter.value = "";
}

const reset = () => {
  converter.value = "";
  result.textContent = "";
}

changeBtn.addEventListener("click", swapLetters);
convBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);