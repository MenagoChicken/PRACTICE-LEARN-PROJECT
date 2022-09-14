/*********** VARIEABLES */
const textArea = document.getElementById("floatingTextarea");
const displayedCounter = document.querySelector("#counter");
const displayedOccurrences = document.querySelector("#occurrences");

textArea.addEventListener("input", () => {
  let charCounter = textArea.value.length; //counter for characters -> it does count white spaces as well
  let letterCounter = 0;
  let wordCounter = 0;
  let bestWords = ["", 0];
  const wordsMap = new Map();

  const wordsArray = textArea.value.split(/\s/g);

  for (const word of wordsArray) {
    const simpleWord = word.replace(/[^a-zA-Ząćęłóśżź]/g, "");

    if (simpleWord.length !== 0) {
      letterCounter += simpleWord.length;
      wordCounter++;

      if (wordsMap.get(simpleWord) !== undefined) {
        let wordCounter = wordsMap.get(simpleWord);
        wordCounter += 1;
        wordsMap.set(simpleWord, wordCounter);
      } else {
        wordsMap.set(simpleWord, 1);
      }

      for (const [key, value] of wordsMap) {
        if (value > bestWords[1]) {
          bestWords = [key, value];
          console.log(bestWords);
        }
      }
    }
  }
  const newOccurrencesValue = `Most used word: ${bestWords[0]} || Occurrences: ${bestWords[1]}`;
  const newCounterValue = `Words: ${wordCounter} || Letters: ${letterCounter} || Characters: ${charCounter}`;

  displayedOccurrences.textContent = newOccurrencesValue;
  displayedCounter.textContent = newCounterValue;
});

// <div class="progress">
// <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
// </div>
