let randomNumber = Math.floor(Math.random() * 11); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = []; // user guesses

console.log(randomNumber);

// html elements
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let userGuesses = document.querySelector(".userGuesses");
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

    console.log(userGuessArrray);
  } else {
    console.log("Mate you've done something wrong! Only numbers!");
  }
});

// FUNCTIONS SECTIONS

function addUserGuess(userGuess) {
  userGuessArrray.push(userGuess);
}

function isTheRandomNumber(number) {
  if (number == randomNumber) {
    congratulations.innerText =
      "Congratulations you've guessed the number! Indeed it was \u2192 " +
      randomNumber;
  }

  return;
}
