// Konstruktor to funkcja służąca do tworzenia obiektów
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const parag = document.querySelector(".result");

function Meal(name, price) {
  this.name = name 
  this.price = price
}

// Meal.prototype.printPrice = () => console.log(`${this.name} kosztuje ${this.price}.`);
Meal.prototype.printPrice = function() {
  console.log(`${this.name} kosztuje ${this.price}`);
}

const meal1 = new Meal("Sałatka z tuńczykiem", 15.99);
const meal2 = new Meal("Pizza z ananasem", 39.99);
const meal3 = new Meal("Suchy chleb", 9.99);

btn1.addEventListener("click", meal1.printPrice.bind(meal1));
btn2.addEventListener("click", meal2.printPrice.bind(meal2));
btn3.addEventListener("click", meal3.printPrice.bind(meal3));