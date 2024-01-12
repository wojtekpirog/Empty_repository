const btn = document.querySelector("button.btn-1");

const goToTheMall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("👟I went to the shopping mall to buy a new shoes.👟");
    }, 1000);
  });
}

const selectShoes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("💲I like the black shoes. I will buy this one.💲");
    }, 1000);
  })
}

const purchaseShoes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✨I bought the black shoes. Look at how shiny this pair is!✨");
    }, 1000);
  })
}

const handleGoToTheMall = (result) => {
  console.log(result);
  return selectShoes();
}

const handleSelectShoes = (result) => {
  console.log(result);
  return purchaseShoes();
}

const handlePurchaseShoes = (result) => {
  console.log(result);
}

const handleFailure = (error) => {
  console.error(error);
  alert("❗An error occured❗");
}

btn.addEventListener("click", () => {
  goToTheMall()
    .then(handleGoToTheMall)
    .then(handleSelectShoes)
    .then(handlePurchaseShoes)
    .catch(handleFailure);
});