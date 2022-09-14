/*********** VARIEABLES */
const textArea = document.getElementById("floatingTextarea");
const displayedCounter = document.querySelector("#counter");
const displayedOccurrences = document.querySelector("#occurrences");

textArea.addEventListener("input", () => {
  // console.log(textArea.value);
  let simpleRegEx = /\s/g;
  let text = textArea.value;
  let textWithoutSpaces = text.replace(simpleRegEx, "");
  let characters = [];

  for (let index = 0; index < textWithoutSpaces.length; index++) {
    const letter = textWithoutSpaces[index];
    if (characters.length === 0) {
      leterAndCount = {
        char: letter,
        count: 1,
      };
      characters.push(leterAndCount);
    } else {
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].char === letter) {
          characters[i].count++;
        } else {
          leterAndCount = {
            char: letter,
            count: 1,
          };
          characters.push(leterAndCount);
        }
      }
    }
    // console.log(characters);
  }

  // console.log(textWithoutSpaces);
  // let charCounter = textArea.value.length; //counter for characters -> it does count white spaces as well

  // let letterCounter = 0;
  // let wordCounter = 0;
  // let bestWords = ["", 0];
  // let simpleRegEx = /\s/;
  // let complexRegEx = /[^a-zA-Ząćęłóśżź]/g;
  // const wordsMap = new Map();

  // const wordsArray = textArea.value.split(simpleRegEx);

  // for (const word of wordsArray) {
  //   let lettersTable = [];
  //   const simpleWord = word.replace(complexRegEx, "");
  //   console.log(simpleWord);
  //   if (simpleWord.length !== 0) {
  //     letterCounter += simpleWord.length;
  //     wordCounter++;
  //     if (wordsMap.get(simpleWord) !== undefined) {
  //       let wordCounter = wordsMap.get(simpleWord);
  //       wordCounter += 1;
  //       wordsMap.set(simpleWord, wordCounter);
  //     } else {
  //       wordsMap.set(simpleWord, 1);
  //     }
  //     for (const [key, value] of wordsMap) {
  //       if (value > bestWords[1]) {
  //         bestWords = [key, value];
  //       }
  //     }
  //   }
  // }

  // const newOccurrencesValue = `Most used word: ${bestWords[0]} || Occurrences: ${bestWords[1]}`;
  // const newCounterValue = `Words: ${wordCounter} || Letters: ${letterCounter} || Characters: ${charCounter}`;

  // displayedOccurrences.textContent = newOccurrencesValue;
  // displayedCounter.textContent = newCounterValue;
});

// <div class="progress">
// <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
// </div>
