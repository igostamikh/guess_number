"use strict";

let secretNumber;
let score;
let highscore = 0;
// Функція ініциації нової гри
function startNewGame() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector(".question").textContent = secretNumber; // to delet
}
// Функція змінює очки та дає підказки
function checkNumber(str, key = true) {
  document.querySelector(".guess-message").textContent = str;
  if (str === "Победа!") {
    document.querySelector(".check").disabled = true;
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector(".guess-message").style.color = "lime";
    document.querySelector(".question").style.width = "50rem";
    document.querySelector(".question").style.background = "lime";
    document.querySelector(".question").style.color = "#fff";
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else if (str === "Вы проиграли.") {
      score -= 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".check").disabled = true;
    } else {
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
  }
}
// Обробка кнопки "Проверить"
document.querySelector(".check").addEventListener("click", () => {
  const guessingNumber = Number(document.querySelector(".number-input").value);

  if (!guessingNumber || guessingNumber <= 0 || guessingNumber > 20) {
    // eslint-disable-next-line operator-linebreak
    document.querySelector(".guess-message").textContent =
      "Введите число от 1 до 20!";
  } else if (guessingNumber === secretNumber) {
    checkNumber("Победа!", false);
  } else if (guessingNumber > secretNumber && score > 1) {
    checkNumber("Меньше!");
  } else if (guessingNumber < secretNumber && score > 1) {
    checkNumber("Больше!");
  } else {
    checkNumber("Вы проиграли.");
  }
});
// Обробка кнопки "Сначала"
document.querySelector(".again").addEventListener("click", startNewGame);

startNewGame();
