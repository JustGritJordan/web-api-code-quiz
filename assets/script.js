// Variables
var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#button");
var answerSelections = document.querySelector("p-section");
// Variables
//
// h1 Variables/Questions
var i = 0;
var h1Element = document.getElementById("h1ElementId");
// var questions = [
//   {
// title: "Commonly used data types DO NOT include:",
// choices: ["strings", "booleans", "alerts", "numbers"],
// answer: "alerts"
//   },

var firstQuestion = [
  "Whats is the largest h1 element?",
  "What css property changes the color of words?",
  "What is the git code to change directories?",
  "What CSS property rounds images?",
  "What is the name of the language that interacts with web pages?",
];
var answerButtons = document.createElement("button");
set.a;
// h1 Variable/Questions
function startGame() {
  h1Element.innerHTML = firstQuestion[i];
  i++;
  console.log("firstQuestion");
}

startButton.addEventListener("click", startGame);
// hide this div

// change the p in html to ol list of buttons
