const words = [
  "look",
  "word",
  "book",
  "love",
  "work",
  "love",
  "book",
  "word",
  "JavaScript",
  "something",
  "love",
  "hate",
  "done",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "something",
  "love",
  "hate",
  "done",
  "book",
  "word",
  "JavaScript",
  "something",
  "love",
  "hate",
];

const wordsMap = new Map();

for (const word of words) {
  if (wordsMap.get(word) !== undefined) {
    let wordCounter = wordsMap.get(word);
    wordCounter += 1;
    wordsMap.set(word, wordCounter);
  } else {
    wordsMap.set(word, 1);
  }
}

let bestWord = ["", 0];

for (const [key, value] of wordsMap) {
  if (value > bestWord[1]) {
    bestWord = [key, value];
    console.log(bestWord);
  }
}

console.log(wordsMap);
