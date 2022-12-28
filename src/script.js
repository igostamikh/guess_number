"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// Функція ініциації нової гри
function startNewGame() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess-message").style.color = "#fff";
  document.querySelector(".question").style.width = "25rem";
  document.querySelector(".question").style.background = "#fff";
  document.querySelector(".question").style.color = "#000";
  document.querySelector(".question").textContent = "???";
  document.querySelector(".guess-message").textContent =
    "Введите число от 1 до 20!";
  console.log(secretNumber);
}
console.log(secretNumber);
// Функція змінює очки та дає підказки
function checkNumber(str, color) {
  document.querySelector(".guess-message").textContent = str;
  if (!color) {
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".check").disabled = true;
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector(".guess-message").style.color = color;
    document.querySelector(".question").style.width = "50rem";
    document.querySelector(".question").style.background = color;
    document.querySelector(".question").style.color = "#fff";

    if (highscore < score && color === "lime") {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
}
// Обробка кнопки "Проверить"
document.querySelector(".check").addEventListener("click", () => {
  const guessingNumber = Number(document.querySelector(".number-input").value);
  if (!guessingNumber || guessingNumber <= 0 || guessingNumber > 20) {
    document.querySelector(".guess-message").textContent =
      "Введите число от 1 до 20!";
  } else if (guessingNumber === secretNumber) {
    checkNumber("Победа!", "lime");
  } else if (score > 16) {
    checkNumber(guessingNumber > secretNumber ? "Меньше!" : "Больше!");
  } else {
    checkNumber("Вы проиграли.", "red");
  }
});
// Обробка кнопки "Сначала"
document.querySelector(".again").addEventListener("click", startNewGame);
