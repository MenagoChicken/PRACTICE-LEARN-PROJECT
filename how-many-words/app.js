/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  const pasedStringLength = textStorage.value.length;

  const letterCounter = textStorage.value.replace(/[^a-zA-Z]/g, "").length;

  const newCounterValue = `Words: 0 || Letters: ${letterCounter} || Characters: ${pasedStringLength}`;
  displayedCounter.textContent = newCounterValue;
});
