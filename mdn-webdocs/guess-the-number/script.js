let randomNumber = Math.floor(Math.random() * 11); // random number
let guessAttempt = 1; // which attempt
console.log(randomNumber);

let guessSubmit = document.getElementById("guessSubmit");

// on click button function
guessSubmit.addEventListener("click", () => {
  console.log(Math.floor(Math.random() * 11));
  guessAttempt++; // after submiting incresse
  console.log(guessAttempt);
});
