/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  const pasedStringLength = textStorage.value.length;

  const wordsArray = textStorage.value.split(/\s/g);
  let letterCounter = 0;
  let wordCounter = 0;
  for (const word of wordsArray) {
    if (word.length !== 0) {
      const simpleWord = word.replace(/[^a-zA-Ząćęłóśżź]/g, "");
      letterCounter += simpleWord.length;
      wordCounter++;
    }
  }

  console.log(wordsArray);
  const newCounterValue = `Words: ${wordCounter} || Letters: ${letterCounter} || Characters: ${pasedStringLength}`;
  displayedCounter.textContent = newCounterValue;
});
