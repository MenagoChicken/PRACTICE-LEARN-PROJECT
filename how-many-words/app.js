/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const counter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  console.log("Pressing buttons");
  console.log(textStorage.value);
});
