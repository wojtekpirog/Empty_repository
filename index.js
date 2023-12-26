const plusButton = document.querySelector("button:first-of-type");
const minusButton = document.querySelector("button:nth-of-type(2)");
const colorButton = document.querySelector("button:nth-of-type(3)");
const paragraph = document.querySelector("p");

const getFontSize = () => {
  const fontSize = getComputedStyle(paragraph).fontSize;
  return parseFloat(fontSize); 
}

const zoomIn = () => {
  let fontSize = getFontSize();
  if (fontSize <= 30) {
    fontSize += 2;
    paragraph.style.fontSize = `${fontSize}px`;
  } else {
    return;
  }
}

const zoomOut = () => {
  let fontSize = getFontSize();
  if (fontSize >= 18) {
    fontSize -= 2;
    paragraph.style.fontSize = `${fontSize}px`;
  } else {
    return;
  }
}

plusButton.addEventListener("click", zoomIn);
minusButton.addEventListener("click", zoomOut);