// Variables
var timeEl = document.querySelector("#timer");
var starButton = document.querySelector;
("#button");
// Variables
//
// h1 Variables/Questions
var i = 0;
var h1Element = document.getElementById("#h1ElementId");
h1Element.innerHTML = firstQuestion;
var firstQuestion = [
  "Whats is the largest h1 element?",
  "What css property changes the color of words?",
  "What is the git code to change directories?",
  "What CSS property rounds images?",
  "What is the name of the language that interacts with web pages?",
];

function incrementNumber() {
  h1Element.innerHTML = firstQuestion[i];
}
// h1 Variable
//
//
//This will also start the timer
//Start the Game

//Change the h1 by the click of the button
// Attach event listener to increment button element
startButton.addEventListener("click", startGame);
