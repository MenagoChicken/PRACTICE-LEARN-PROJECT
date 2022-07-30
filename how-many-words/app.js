/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  const pasedStringLength = textStorage.value.length;

  let wordsArray = textStorage.value.split(" ");
  let letterCounter = 0;
  let wordCounter = 0;
  for (const word of wordsArray) {
    if (word !== "") {
      let simpleWord = word.replace(/[^a-zA-Ząćęłóśżź]/g, "");
      letterCounter += simpleWord.length;
      wordCounter++;
    }
  }

  console.log();
  const newCounterValue = `Words: ${wordCounter} || Letters: ${letterCounter} || Characters: ${pasedStringLength}`;
  displayedCounter.textContent = newCounterValue;
});
