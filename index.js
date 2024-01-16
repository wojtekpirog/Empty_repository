const result = document.querySelector(".result");
const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];
const newNumber = 0;
let sum = 0;

function sumNumbers() {
  sum = numbers.reduce((currTotal, nextVal) => currTotal + nextVal);
  console.log(`Uzyskana suma (wewnątrz funkcji 'sumNumbers'): ${sum}`);  
}

sumNumbers();
console.log(`Uzyskana suma (poza funkcją 'sumNumbers'): ${sum}`);

function listenerFn() {
  sum = numbers.reduce((currTotal, nextVal) => currTotal - nextVal);
  console.log(`Uzyskana różnica (wewnątrz funkcji 'listenerFn'): ${sum}`);
}

downloadBtn.addEventListener("click", () => {
  listenerFn();
  console.log(`Uzyskana różnica (poza funkcją 'listenerFn'): ${sum}`);
});
// Array.find() - find the first item that matches from an array:

function findElem() {
  const matchingElem = numbers.findIndex(num >= num >= 2);
  console.log(matchingElem);
};

abortBtn.addEventListener("click", findElem);