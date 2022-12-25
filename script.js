'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введіть число!';
  }
});
