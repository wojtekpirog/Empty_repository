const btn = document.querySelector("button.btn-1");

const dessertStock = {
  cheeseCake: {
    inStockAmount: 10,
    price: 5
  },
  spongeCake: {
    inStockAmount: 4,
    price: 7
  }
};

const budget = 10;

function isAvailable() {
  return new Promise((resolve, reject) => {
    if (dessertStock.spongeCake.inStockAmount > 0) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

function checkPrice(productAvailable) {
  return new Promise((resolve, reject) => {
    if (productAvailable && dessertStock.spongeCake.price < budget) {
      resolve("Reasonable price. Purchasing...😊");
    } else {
      reject("Too expensive. Cancelling the order...😥");
    }    
  });
}

function handleIsAvailable(productAvailable) {
  return checkPrice(productAvailable);
}

function handleCheckPrice(responseMessage) {
  return checkPrice(responseMessage);
}

function handleFailure(error) {
  console.error(error);
  window.alert("Obietnica nie została spełniona 😥");
}

btn.addEventListener("click", () => {
  isAvailable()
    .then(handleIsAvailable)
    .then(handleCheckPrice)
    .then(resMsg => console.log(`Response message: ${resMsg}`))
    .catch(handleFailure)
});