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
    const wordCounter = wordsMap.get(word);
    console.log(wordCounter);
  } else {
    wordsMap.set(word, 0);
  }
}

console.log(wordsMap);
