'use strict';

let secretNumber;
let score;
let highscore = 0;
//Функція ініциації нової гри
function startNewGame() {
  secretNumber = Math.round(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('.check').disabled = false;
  document.querySelector('.question').textContent = secretNumber; //to delet
}
//Функція змінює очки та дає підказки
function checkNumber(str, key = true) {
  document.querySelector('.guess-message').textContent = str;
  if (key) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.check').disabled = true;
    document.querySelector('.question').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
}
//Обробка кнопки "Проверить"
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber || guessingNumber <= 0 || guessingNumber > 20) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20!';
  } else if (guessingNumber === secretNumber) {
    checkNumber('Победа!', false);
  } else if (guessingNumber > secretNumber && score > 1) {
    checkNumber('Меньше!');
  } else if (guessingNumber < secretNumber && score > 1) {
    checkNumber('Больше!');
  } else {
    document.querySelector('.check').disabled = true;
    checkNumber('Вы проиграли.');
  }
});
/*TODO: 1.Визначити число від 1 до 20
2.Порівняти з введенним:
 а) якщо замале вивести - "Більше!",
 б) якщо завелике вивести - "Менше",
 в) якщо співпало вивести - "Перемога!" */

/*TODO: 1.При досягненні лічільником 0:
а) заблокувати кнопку "Проверить!,
б) вивести - "Проигрыш."
2.При натисненні на кнопку "Сначала!" перезапустити всі значення до початкових.*/
