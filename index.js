const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const minLength = document.querySelector(".minLength");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// RegExp jako wyrażenie regularne - poprawny adres email
// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i

minLength.textContent = `minimum ${minValue} znaków`;

const showMsg = () => {
  if (pass.value.length === 0) {
    p.textContent = "Nie podałeś hasła...";
  } else {
    // p.textContent = `Długość ciągu znaków z inputa: ${pass.value.length}`;
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
      p.textContent = "Masz bardzo dobre hasło! 💪";
      p.style.color = "lime";
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
      p.textContent = "Masz dobre hasło! 👍"
      p.style.color = "gold";
    } else {
      p.textContent = "Masz słabe hasło! 😥"
      p.style.color = "tomato";      
    }
  }
}

const checkPassword = () => {
  if (pass.value === "") {
    p.textContent = "Nie podałeś hasła...";
    p.style.color = "tomato";
  } else {
    showMsg();
  }
}

pass.addEventListener("keyup", checkPassword);