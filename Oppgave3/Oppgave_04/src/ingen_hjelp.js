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
    return directions[getARandomNumber(2, 0)];
};

const addRandomNumbersToArray = (howManyNumbersYouWant) => {
    numbers.push(getARandomNumber(90, 10));
};

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const addNumbersToUI = () => {
    for (let i = 0; i < numbers.length; i++) {
        const quizNumbers = `<li>${numbers[i]}</li>`;
        numbersUl.innerHTML += quizNumbers;
    }
};

const sortNumbers = (ascOrdesc) => {
    if (ascOrdesc === "asc") {
        numbers.sort(function (a, b) {
            return a - b;
        });
    } else if (ascOrdesc === "desc") {
        numbers.sort(function (a, b) {
            return b - a;
        });
    }
};

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const inputFields = () => {
    for (let i = 0; i < numbers.length; i++) {
        const input = `<input type=text></input>`;
        guessUl.innerHTML += input;
    }
};

const addDescUI = (direction) => {
    descEl.innerHTML = `Sorter etter ${direction === "asc" ? "minste først" : "største først"
        }`;
};

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const guessedNumbers = () => {
    const answers = guessUl.querySelectorAll("input");
    console.log(Array.from(answers).map((answer) => answer.value));
    return Array.from(answers).map((answer) => answer.value);
};

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkNumberSeq = () => {
    const guess = guessedNumbers();
    let isCorrect = false;
    if (direction === "asc") {
        isCorrect = numbers.sort().join("") === guess.join("");
    } else {
        isCorrect = numbers.sort().reverse().join("") === guess.join("");
    }
    if (isCorrect) {
        resetUI();
        createUI(getARandomNumber(3, 5));
        alert("Du klarte det :) Til neste oppgave")
    } else {
        alert("Ikke satt tall i riktig rekkefølge");
    }
};

const resetUI = () => {
    numbers = [];
    numbersUl.innerHTML = null;
    guessUl.innerHTML = null;
};

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
const createUI = (number) => {
    direction = setDirection();
    addRandomNumbersToArray(number, 10);
    addDescUI(direction);
    addNumbersToUI();
    console.log(numbers);
    sortNumbers("asc");
    console.log(numbers);
    inputFields();
};

createUI(5); // Kjører automatisk når siden blir startet

// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", checkNumberSeq);
