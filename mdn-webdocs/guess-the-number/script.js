let randomNumber = Math.floor(Math.random() * 11); // random number
let guessAttempt = 1; // which attempt
let userGuessArrray = [];

console.log(randomNumber);
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");

function addUserGuess(userGuess) {
  userGuessArrray.push(userGuess);
}

// on click button function
guessSubmit.addEventListener("click", () => {
  guessAttempt++; // after submiting incresse
  //The value property sets or returns the value of the value attribute of a text field.
  addUserGuess(guessField.value);
  console.log(userGuessArrray);
});
