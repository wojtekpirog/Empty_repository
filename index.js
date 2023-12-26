const arrowButton = document.querySelector(".arrow");
const arrowIcon = document.querySelector(".fas");
const firstImg = document.querySelector(".item1");

const showFirstImg = () => {
  firstImg.classList.toggle("hide");

  if (firstImg.classList.contains("hide")) {
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
  }
}

arrowButton.addEventListener("click", showFirstImg);