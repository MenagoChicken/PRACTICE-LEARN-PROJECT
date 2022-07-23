let randomNumber = Math.floor(Math.random() * 100 + 1); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = []; // user guesses

// html elements
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let errorMessage = document.getElementById("errorMessage");
let newGame = document.getElementById("newGame");
let information = document.querySelector(".information");

// on click submit button function
guessSubmit.addEventListener("click", () => {
  if (Number.isInteger(parseInt(guessField.value))) {
    guessAttempt++; // after submiting incresse
    //add guess to the table
    addUserGuess(" " + guessField.value);
    highOrLow(randomNumber, guessField.value);
    numberOfGuessesCheck();
    isTheRandomNumber(guessField.value);
    guessField.value = "";
  } else {
    displayMessage(
      errorMessage,
      "Mate you've done something wrong! Only numbers!"
    );
    guessField.value = "";
  }
});

newGame.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 11 + 1);
  userGuessArrray = [];
  guessAttempt = 1;
  displayMessage(information, "You've already gueesed: " + userGuessArrray);
  newGame.style.display = "none";
  guessField.removeAttribute("disabled");
  guessSubmit.removeAttribute("disabled");
});

// FUNCTIONS SECTION
function addUserGuess(userGuess) {
  userGuessArrray.push(userGuess);
}

function isTheRandomNumber(number) {
  if (number == randomNumber) {
    displayMessage(errorMessage, "");
    displayMessage(
      information,
      "Congratulations! You've guested the number! Indeed it it was \u2911 " +
        randomNumber
    );
    disableGame();
  }
}

// High, low of the limit
function highOrLow(randomNumb, guess) {
  if (guess < 1 || guess > 100) {
    displayMessage(errorMessage, "Yo! Stay in the limits");
    displyWhatWasAlreadyGuessed();
  } else if (guess > randomNumb) {
    displayMessage(errorMessage, "Too high, try again.");
    displyWhatWasAlreadyGuessed();
  } else if (guess < randomNumb) {
    displayMessage(errorMessage, "Too low, try again.");
    displyWhatWasAlreadyGuessed();
  } else {
    return;
  }
}

function numberOfGuessesCheck() {
  if (guessAttempt === 11) {
    tenGuesses();
  }
}

function disableGame() {
  guessField.setAttribute("disabled", "");
  guessSubmit.setAttribute("disabled", "");
  displayMessage(errorMessage, "");
  newGame.style.display = "";
}

function tenGuesses() {
  displayMessage(
    information,
    "That was your tenth guess, try again. The number was  \u2911 " +
      randomNumber
  );
  disableGame();
}

function displyWhatWasAlreadyGuessed() {
  displayMessage(information, "You've already gueesed: " + userGuessArrray);
}

// Display message
function displayMessage(htmlElement, message) {
  htmlElement.innerText = message;
}
