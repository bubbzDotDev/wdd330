'use strict';

const sort = strOfNums => { // Adjusted to take in user input.
  const arr = strOfNums.split(',');
  const resultArr = [];
  arr.forEach(num => {
    resultArr.push(+num);
  });
  return resultArr.sort();
};

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  const numberInput = document.querySelector('#number-input').value;
  const displayResult = document.querySelector('#display-result');

  if (numberInput === '') {
    displayResult.innerHTML = '<span class="error">Enter some numbers and try again!</span>';
  } else {
    const result = sort(numberInput);
    displayResult.innerHTML = `<pre>The result is <strong>[${result}]</strong>.</pre>`
  }
});

const displayButton = document.querySelector('#display-button');

displayButton.addEventListener('click', () => {
  const displayFunction = document.querySelector('#display-function');
  displayFunction.classList.toggle('hide-me');

  const showHideSpan = document.querySelector('#show-hide-span');
  displayFunction.classList.contains('hide-me') ? showHideSpan.textContent = 'Display' : showHideSpan.textContent = 'Hide';
});

