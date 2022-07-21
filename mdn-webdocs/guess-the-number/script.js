let randomNumber = Math.floor(Math.random() * 11); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = []; // user guesses

console.log(randomNumber);

// html elements
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let errorMessage = document.getElementById("errorMessage");
let newGame = document.getElementById("newGame");
let information = document.querySelector(".information");

// on click button function
guessSubmit.addEventListener("click", () => {
  guessAttempt++; // after submiting incresse
  if (Number.isInteger(parseInt(guessField.value))) {
    highOrLow(randomNumber, guessField.value);
    isTheRandomNumber(guessField.value);
    //The value property sets or returns the value of the value attribute of a text field.
    let niceFormat = " " + guessField.value;
    //add guess to the table
    addUserGuess(niceFormat);
    //show values to the user
    displayGuesses();
    guessField.value = "";
    console.log(userGuessArrray);
  } else {
    displayNumbersOnly();
    guessField.value = "";
  }
});

newGame.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 11 + 1); // doesn't work
  userGuessArrray = [];
  displayGuesses();
  newGame.style.display = "none";
  errorMessage.innerText = "";
  guessField.removeAttribute("disabled");
  guessSubmit.removeAttribute("disabled");
});

// FUNCTIONS SECTIONS

function addUserGuess(userGuess) {
  userGuessArrray.push(userGuess);
}

function isTheRandomNumber(number) {
  if (number == randomNumber) {
    displayCongratulations();
    guessField.setAttribute("disabled", "");
    guessSubmit.setAttribute("disabled", "");
    newGame.style.display = "";
  }
}

function displayCongratulations() {
  information.innerText =
    "Congratulations! You've guested the number! Indeed it it was \u2911 " +
    randomNumber;
}

function displayGuesses() {
  information.innerText = "You've already gueesed: " + userGuessArrray;
}

function displayYo() {
  errorMessage.innerText = "Yo! Stay in the limits";
}

function displayLow() {
  errorMessage.innerText = "Too low, try again.";
}

function dispalyHigh() {
  errorMessage.innerText = "Too high, try again.";
}

function displayNumbersOnly() {
  errorMessage.innerText = "Mate you've done something wrong! Only numbers!";
}

function highOrLow(randomNumb, guess) {
  if (guess < 1 || guess > 100) {
    displayYo();
  } else if (guess > randomNumb) {
    dispalyHigh();
  } else if (guess < randomNumb) {
    displayLow();
  } else {
    return;
  }
}
