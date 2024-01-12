const btn = document.querySelector("button.btn-1");

let food = ["chicken", "rice", "salad", "soup"];
let isVeganPerson = true;

const buyFood = () => {
  return new Promise((resolve, reject) => {
    food ? resolve(food) : reject("There is no food to cook 😥");
  });
}

const cookFood = food => {
  return new Promise((resolve, reject) => {
    food.length === 4 ? resolve(food) : reject("I need to buy more food.");
  })
}

const serveFood = food => {
  return new Promise((resolve, reject) => {
    if (food.includes("chicken") && !isVeganPerson) {
      resolve("Lunch served. Enjoy your meal!");
    } else {
      reject("Apologies. I didn't know this food is unsuitable for you.");
    }
  });
}

const handleBuyFood = (food) => {
  console.log(food);
  return cookFood(food);
}

const handleCookFood = (food) => {
  console.log(food);
  return serveFood(food);
}

const handleServeFood = (result) => {
  console.log(result);
}

const handleRejection = (reasonForRejection) => {
  console.error(reasonForRejection);
}

btn.addEventListener("click", () => {
  buyFood() // Zwróci tablicę `food` lub komunikat błędu
    .then(handleBuyFood)
    .then(handleCookFood)
    .then(handleServeFood)
    .catch(handleRejection);
});