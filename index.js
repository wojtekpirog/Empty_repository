const wojtas = {
  firstName: "Wojciech",
  lastName: "Piróg",
  nickname: "Wojtas",
  age: 23,
  birthdate: new Date(2000, 0, 19),
  "hair-color": "black",
  "marital-status": "single",
  sex: "male",
  likesCats: true,
  car: {
    brand: "Citroen",
    model: "C1",
    yearLaunched: 2006,
    "laquer-color": "Silver",
    registrationInfo: {
      numberplate: "DBL HS40"
    }
  }
}

// Pętla `for(in)` działa na obiektach
const birthdate = wojtas["birthdate"];

// Opcje formatowania daty:
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}

// Funkcja formatująca datę:
const formatter = new Intl.DateTimeFormat('pl-PL', options);
const dateReady = formatter.format(birthdate);

wojtas["birthdate"] = dateReady;

for (const key in wojtas) {
  console.log(`Key: ${key} | Value: ${wojtas[key]}`);
}

// const birthdate = wojtas.birthdate;

// const formattingOptions = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric"
// };

// const formatter = new Intl.DateTimeFormat('pl-PL', formattingOptions);
// const formattedDate = formatter.format(birthdate);
// console.log(formattedDate);