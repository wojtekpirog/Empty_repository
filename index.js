const button = document.querySelector("button");

let beverages = ["green tea", "apple cider", "coffee", "yerba mate"];

function pickRandomBeverage() {
  return new Promise((resolve, reject) => {
    let randomIndex = Math.floor(Math.random() * beverages.length);
    let selectedBeverage = beverages[randomIndex];

    setTimeout(() => {
      console.log(`Selected beverage: ${selectedBeverage}`);
      resolve(selectedBeverage);
    }, 1000);
  })
}

function checkIfHotWaterIsReady(pickedDrink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pickedDrink) {
        console.log("Preparing your drink...🍹");
        resolve(pickedDrink);
      } else {
        reject("No beverage has been picked up.");
      }
    }, 1000);
  });
}

function prepareDrink(pickedDrink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pickedDrink) {
        console.log(`Enjoy your ${pickedDrink}🍹`);
        resolve(true);
      } else {
        reject("Your drink is not ready yet...");
      }
    }, 1000);
  })
}

async function asyncAwaitPromiseHandling() {
  const pickedDrink = await pickRandomBeverage(); // Tu będzie wartość `resolve` z funkcji `pickRandomBeverage()`, a w praktyce - obiekt Promise
  const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
  const isDrinkPrepared = await prepareDrink(isHotWaterReady);
  return isDrinkPrepared;
}

button.addEventListener("click", () => {
  console.log(asyncAwaitPromiseHandling());
});