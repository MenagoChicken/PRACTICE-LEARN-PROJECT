let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

let guessSubmit = document.getElementById("guessSubmit");

guessSubmit.addEventListener("click", () => {
  console.log(Math.floor(Math.random() * 11));
});
