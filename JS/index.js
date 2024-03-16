const btn = document.querySelector("button");
const container = document.querySelector(".container");
const template = document.querySelector(".square-temp");

let num = 1;

const addSquare = () => {
  const square = template.content.cloneNode(true);
  const squareNumber = square.querySelector(".square-number");

  squareNumber.textContent = num;
  container.append(square);
  
  num++;
}

btn.addEventListener("click", addSquare);