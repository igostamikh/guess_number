'use strict';

const secretNumber = Math.round(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.question').textContent = secretNumber; //to delet
document.querySelector('.score').textContent = score;
document.querySelector('.number-input').value = '';

function checkNumber(str) {
  document.querySelector('.guess-message').textContent = str;
  score--;
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber || guessingNumber <= 0 || guessingNumber > 20) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Победа!';
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guessingNumber > secretNumber) {
    checkNumber('Меньше!');
  } else if (guessingNumber < secretNumber) {
    checkNumber('Больше!');
  }
});
/*TODO: 1.Визначити число від 1 до 20
2.Порівняти з введенним:
 а) якщо замале вивести - "Більше!",
 б) якщо завелике вивести - "Менше",
 в) якщо співпало вивести - "Перемога!" */
