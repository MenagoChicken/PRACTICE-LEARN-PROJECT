/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  const pasedStringLength = textStorage.value.length;
  const letterCounter = textStorage.value.replace(
    /[^a-zA-Ząćęłóśżź]/g,
    ""
  ).length;

  let text = textStorage.value;
  let array = text.split(" ");
  let letterCount = 0;
  for (const word of array) {
    if (word !== "") {
      let simpleWord = word.replace(/[^a-zA-Ząćęłóśżź]/g, "");
      letterCount += simpleWord.length;
    }
  }

  console.log(letterCount);

  const onlyWords = textStorage.value.replace(/[^a-zA-Ząćęłóśżź0-9 ]/g, "");
  tableOfWords = onlyWords.split(" ");

  const wordCounter = tableOfWords.length;

  const newCounterValue = `Words: ${
    wordCounter - 1
  } || Letters: ${letterCounter} || Characters: ${pasedStringLength}`;
  displayedCounter.textContent = newCounterValue;
});
