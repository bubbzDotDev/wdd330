'use strict';

// Altered to accept user form input:
const halve = (inputString) => {
  const newArr = inputString.split(',');
  const halfPoint = Math.ceil(newArr.length / 2);
  return newArr.slice(0, halfPoint);
};

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  const numberInput = document.querySelector('#number-input').value;
  const displayResult = document.querySelector('#display-result');

  if (numberInput === '') {
    displayResult.innerHTML = '<span class="error">Enter a number and try again!</span>';
  } else {
    const result = halve(numberInput);
    displayResult.innerHTML = `The result is <strong>[${result}]</strong>.`
  }
});

const displayButton = document.querySelector('#display-button');

displayButton.addEventListener('click', () => {
  const displayFunction = document.querySelector('#display-function');
  displayFunction.classList.toggle('hide-me');

  const showHideSpan = document.querySelector('#show-hide-span');
  displayFunction.classList.contains('hide-me') ? showHideSpan.textContent = 'Display' : showHideSpan.textContent = 'Hide';
});

