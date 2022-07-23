let randomNumber = Math.floor(Math.random() * 11 + 1); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = []; // user guesses

console.log(randomNumber);

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
    console.log(guessAttempt);
    highOrLow(randomNumber, guessField.value);
    isTheRandomNumber(guessField.value);
    //The value property sets or returns the value of the value attribute of a text field.
    let niceFormat = " " + guessField.value;
    //add guess to the table
    addUserGuess(niceFormat);
    //show values to the user
    displayMessage(information, "You've already gueesed: " + userGuessArrray);
    guessField.value = "";
    console.log(userGuessArrray);
    numberOfGuessesCheck();
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
  displayMessage(information, "You've already gueesed: " + userGuessArrray);
  newGame.style.display = "none";
  guessField.removeAttribute("disabled");
  guessSubmit.removeAttribute("disabled");
  console.log(randomNumber);
});

// FUNCTIONS SECTIONS
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

// Display message
function displayMessage(htmlElement, message) {
  htmlElement.innerText = message;
}

// High, low of the limit
function highOrLow(randomNumb, guess) {
  if (guess < 1 || guess > 100) {
    displayMessage(errorMessage, "Yo! Stay in the limits");
  } else if (guess > randomNumb) {
    displayMessage(errorMessage, "Too high, try again.");
  } else if (guess < randomNumb) {
    displayMessage(errorMessage, "Too low, try again.");
  } else {
    return;
  }
}

function numberOfGuessesCheck() {
  if (guessAttempt === 10) {
    disableGame();
  }
}

function disableGame() {
  displayMessage(
    information,
    "That was your tenth guess, try again. The number was  \u2911 " +
      randomNumber
  );
  guessField.setAttribute("disabled", "");
  guessSubmit.setAttribute("disabled", "");
  displayMessage(errorMessage, "");
  newGame.style.display = "";
}
