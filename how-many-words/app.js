/*********** VARIEABLES */
const textStorage = document.getElementById("text-storage");
const displayedCounter = document.querySelector("#counter");
console.log(textStorage);
console.log(counter);

textStorage.addEventListener("input", () => {
  let pasedString = textStorage.value;
  let pasedStringLength = textStorage.value.length;
  console.log(
    `This is the string: ${pasedString} and this is it length: ${pasedStringLength}`
  );
});

/* Way to remove all special characters 
const str = "hello' 123 !@#$%^WORLD?.";
console.log(str);
const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, "");
console.log(noSpecialCharacters);
*/
