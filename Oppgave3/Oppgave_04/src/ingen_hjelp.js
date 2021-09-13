import "./styles.css";

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const descEl = document.getElementById("desc");
// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector("button");

// TODO: Lag en liste med tallene som skal sorteres
let numbers = [];
let direction;
const directions = ["asc", "desc"];

const getARandomNumber = (limit, StartNumber) =>
  Math.floor(Math.random() * limit + StartNumber);

const setDirection = () => {
  // Velger random om det er asc ell desc.
  return directions[getARandomNumber(2, 0)];
};

const addRandomNumbersToArray = (howManyNumbersYouWant) => {
  for (let i = 0; i < howManyNumbersYouWant; i++) {
    numbers.push(getARandomNumber(50, 10));
  }
};

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const addNumbersToUI = () => {
  for (let i = 0; i < numbers.length; i++) {
    const quizNumbers = `<li>${numbers[i]}</li>`;
    numbersUl.innerHTML += quizNumbers;
  }
};

//Sjekker om nummerene er riktig sortert
const sortNumbers = (trueOrFalse) => {
  const guess = guessedNumbers();

  if (direction === "asc") {
    trueOrFalse = numbers.sort().join("") === guess.join("");
  } else {
    trueOrFalse = numbers.sort().reverse().join("") === guess.join("");
  }
  return trueOrFalse;
};

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const inputFields = () => {
  for (let i = 0; i < numbers.length; i++) {
    const input = `<input size= "2" type=text></input>`;
    guessUl.innerHTML += input;
  }
};

// Tittelen om det skal sortere etter minst ell størst.
const addDescUI = (direction) => {
  descEl.innerHTML = `Sorter etter ${
    direction === "asc" ? "minste først" : "største først"
  }`;
};

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const guessedNumbers = () => {
  const answers = guessUl.querySelectorAll("input");
  // Henter verdiene skrevet inn i tekstboksene og setter dem inn i en array.
  return Array.from(answers).map((answer) => answer.value);
};

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkNumberSeq = () => {
  let isCorrect = sortNumbers(false);
  if (isCorrect) {
    resetUI();
    createUI(getARandomNumber(3, 5));
    alert("Du klarte det :) Til neste oppgave");
  } else {
    alert("Ikke satt tall i riktig rekkefølge");
  }
};

// Hvordan nullstille feltene som er brukt.
const resetUI = () => {
  numbers = [];
  numbersUl.innerHTML = null;
  guessUl.innerHTML = null;
};

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// Ja. Tenker det siden det blir da lettere å bare
// kalle på den der det trengs
const createUI = (number) => {
  direction = setDirection();
  addRandomNumbersToArray(number, 1);
  addDescUI(direction);
  addNumbersToUI();
  inputFields();
};

//Pluss lage en som starter instant når nettsiden er loadet
createUI(2); // Kjører automatisk når siden blir startet

// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", checkNumberSeq);
