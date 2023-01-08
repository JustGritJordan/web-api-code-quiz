var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#button");
var answerSelections = document.querySelector("p-section");
var time = 45;
var timer;
var i = 0;
var h1Element = document.getElementById("h1ElementId");
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "Whats is the largest title element?",
    choices: ["h5", "h2", "h1", "h3"],
    answer: "h1",
  },
  {
    title: "What css property changes the color of words?",
    choices: ["text-size", "text-font", "text-color", "background color"],
    answer: "alerts",
  },
  {
    title: "What is the git code to change directories?",
    choices: ["git checkout", "cd", "mkdir", "git pull"],
    answer: "cd",
  },
  {
    title: "What CSS property rounds images?",
    choices: ["strings", "br", "padding", "border-radius"],
    answer: "border-radius",
  },
];

var answerButtons = document.createElement("button");

function startGame() {
  timer = setInterval(function () {
    time--;
    timeEl.textContent = time;
    if (time == 0) {
      gameOver();
    }
  }, 1000);

  displayQuestion();
}

function displayQuestion() {
  document.getElementById("question-container").innerHTML = "";
  document.getElementById("question-container").innerHTML = questions[i].title;
  for (var j = 0; j < questions[i].choices.length; j++) {
    var button = document.createElement("button");
    button.addEventListener("click", function (event) {
      var choice = event.target.innerHTML;
      if (questions[i].answer != choice) {
        time -= 10;
      }
      if (questions.length - 1 == i) {
        gameOver();
      } else {
        i += 1;
        displayQuestion();
      }
    });
    button.innerHTML = questions[i].choices[j];
    document.getElementById("question-container").append(button);
  }
}

function gameOver() {
  clearInterval(timer);
  document.getElementsByClassName("quiz-container")[0].innerHTML = "";
  prompt("What are your intials?");
}

startButton.addEventListener("click", startGame);
