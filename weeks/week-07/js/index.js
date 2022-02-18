'use strict';

// Accepted solution:
// const sum = (arr) => {
//   let result = 0;
//   arr.forEach(num => {
//     result += num;
//   });
//   return result;
// };

// const mean = (arr) => {
//   const numSum = sum(arr);
//   return numSum / arr.length;
// };

// Solution altered to accept user input:
const sum = (arr) => {
  let result = 0;
  arr.forEach(num => {
    result += +num;
  });
  return result;
};

const mean = (userInputString) => {
  const strArr = userInputString.trim().split(' ');
  const numSum = sum(strArr);
  return (numSum / strArr.length).toFixed(1);
};

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  const numberInput = document.querySelector('#number-input').value;
  const displayResult = document.querySelector('#display-result');

  if (numberInput === '') {
    displayResult.innerHTML = '<span class="error">Enter a number and try again!</span>';
  } else {
    const result = mean(numberInput);
    displayResult.innerHTML = `The result is <strong>${result}</strong>.`
  }
});

const displayButton = document.querySelector('#display-button');

displayButton.addEventListener('click', () => {
  const displayFunction = document.querySelector('#display-function');
  displayFunction.classList.toggle('hide-me');

  const showHideSpan = document.querySelector('#show-hide-span');
  displayFunction.classList.contains('hide-me') ? showHideSpan.textContent = 'Display' : showHideSpan.textContent = 'Hide';
});

