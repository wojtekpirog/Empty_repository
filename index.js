function printCarInfo() {
  console.log(this); // Bind służy do powiązania `this` z obiektem, czyli do ustawienia kontekstu dla `this` na konkretny obiekt:
  console.log(`Marka: ${this.brand}, model: ${this.model}, rok produkcji: ${this.yearLaunched}`);
}

const car1 = {
  brand: "Audi",
  model: "A3",
  yearLaunched: 2006,
  printInformation: function() {
    const inner = () => console.log(`Car brand: ${this.brand}`);
    inner();
  }
}

const car2 = {
  brand: "Mercedes",
  model: "W20",
  yearLaunched: 2000,
  printInformation: function() {
    const inner = () => console.log(`Car brand: ${this.brand}`);
    inner();
  }
}

const boundInfoFunction = car1.printInformation.bind(car1);
boundInfoFunction();

const boundMercInfo = car2.printInformation.bind(car2);
boundMercInfo();

// printCarInfo.bind(car1);
const boundCarInfo = printCarInfo.bind(car1);
boundCarInfo();