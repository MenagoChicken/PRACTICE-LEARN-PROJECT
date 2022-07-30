/*********** VARIABLES ***********/
const customName = document.querySelector("#customname");
const story = document.querySelector(".story");
const randomizeButton = document.querySelector(".randomize");
const storyString =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. \
  When they got to :inserty:, they stared in horror for a few moments, \
  then :insertz:. Bob saw the whole thing, but was not surprised \
   — :insertx: weighs 300 pounds, and it was a hot day.";

/*********** VARIABLES END ***********/

randomizeButton.addEventListener("click", () => {
  console.log("Randomize click!");
  story.textContent = storyString;
  story.style.visibility = "visible";
});
