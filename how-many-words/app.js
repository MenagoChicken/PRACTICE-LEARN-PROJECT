/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");

textStorage.addEventListener("input", () => {
  let charCounter = textStorage.value.length; //counter for characters -> it does count white spaces as well
  let letterCounter = 0;
  let wordCounter = 0;

  const wordsArray = textStorage.value.split(/\s/g);

  for (const word of wordsArray) {
    if (word.length !== 0) {
      const simpleWord = word.replace(/[^a-zA-Ząćęłóśżź]/g, "");
      letterCounter += simpleWord.length;
      wordCounter++;
    }
  }

  const newCounterValue = `Words: ${wordCounter} || Letters: ${letterCounter} || Characters: ${charCounter}`;
  displayedCounter.textContent = newCounterValue;
});
