let againButton = document.querySelector(".again");
let checkButton = document.querySelector(".check");
let inputGuess = document.querySelector(".guess");
let showNumber = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".label-score span");
let highscore = document.querySelector(".highscore");
let randomNumber = parseInt(Math.random() * 100 + 1);
let body = document.body;
let scoreNumber = 0;
let highscoreNumber = 0;

function generateGame() {
  checkButton.addEventListener("click", (e) => {
    console.log(randomNumber);
    console.log(inputGuess.value);

    if (inputGuess.value.trim() === "") {
      message.textContent = "Please enter number!";
      e.stopPropagation();
    } else {
      if (inputGuess.value == randomNumber) {
        showNumber.textContent = randomNumber;
        body.style.backgroundColor = `${"#60b347"}`;
        message.textContent = "🎉 Correct number!";
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(randomNumber);

        scoreNumber += 1;
        score.textContent = scoreNumber;

        if (scoreNumber > highscoreNumber) {
          highscoreNumber = scoreNumber;
          highscore.textContent = highscoreNumber;
        }
      } else if (inputGuess.value < randomNumber) {
        message.textContent = "📉 Too low!";
        scoreNumber = 0;
        score.textContent = 0;
      } else if (inputGuess.value > randomNumber) {
        message.textContent = "📈 Too high!";
        scoreNumber = 0;
        score.textContent = 0;
      }
    }
  });

  againButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);

    message.textContent = "Start guessing...";
    score.textContent = "0";
    highscore.textContent = "0";
    body.style.backgroundColor = `${"#222"}`;

    inputGuess.value = "";
    showNumber.textContent = "?";
    scoreNumber = 0;
    highscoreNumber = 0;
    score.textContent = 0;
    highscore.textContent = 0;
  });
}

generateGame();
