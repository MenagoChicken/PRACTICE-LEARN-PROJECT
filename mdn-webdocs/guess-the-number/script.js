var randomNumber = Math.floor(Math.random() * 11); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = []; // user guesses

console.log(randomNumber);

// html elements
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let newGame = document.getElementById("newGame");
let userGuesses = document.querySelector(".userGuesses");
let htmlRandomNumber = document.querySelector(".randomNumber");
let congratulations = document.querySelector(".congratulations");

// on click button function
guessSubmit.addEventListener("click", () => {
  guessAttempt++; // after submiting incresse
  if (Number.isInteger(parseInt(guessField.value))) {
    isTheRandomNumber(guessField.value);
    //The value property sets or returns the value of the value attribute of a text field.
    let niceFormat = " " + guessField.value;
    //add guess to the table
    addUserGuess(niceFormat);
    //show values to the user
    userGuesses.innerText = userGuessArrray;
    guessField.value = "";
    console.log(userGuessArrray);
  } else {
    console.log("Mate you've done something wrong! Only numbers!");
    guessField.value = "";
  }
});

newGame.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 11 + 1); // doesn't work
  userGuessArrray = [];
  userGuesses.innerText = "";
  congratulations.style.display = "none";
  newGame.style.display = "none";
  guessField.removeAttribute("disabled");
  guessSubmit.removeAttribute("disabled");
});

// FUNCTIONS SECTIONS

function addUserGuess(userGuess) {
  userGuessArrray.push(userGuess);
}

function isTheRandomNumber(number) {
  if (number == randomNumber) {
    congratulations.style.display = "";
    htmlRandomNumber.innerText = randomNumber;
    guessField.setAttribute("disabled", "");
    guessSubmit.setAttribute("disabled", "");
    newGame.style.display = "";
  }
}
