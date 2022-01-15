const digitsum = (num) => {
  const numString = `${num}`;
  const numLength = numString.length;
  const numArray = [];
  let result = 0;

  for (let i = 0; i < numLength; i++) {
    numArray.push(numString[i]);
  }

  numArray.forEach(digit => {
    result += parseInt(digit);
  });

  return result;
}

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  const numberInput = document.querySelector('#number-input').value;
  const displayResult = document.querySelector('#display-result');

  if (numberInput === '') {
    displayResult.innerHTML = '<span class="error">Enter a number and try again!</span>';
  } else {
    const result = digitsum(numberInput);
    displayResult.innerHTML = `<strong>The result is ${result}!</strong>`
  }
});

const displayButton = document.querySelector('#display-button');

displayButton.addEventListener('click', () => {
  const displayFunction = document.querySelector('#display-function');
  displayFunction.classList.toggle('hide-me');

  const showHideSpan = document.querySelector('#show-hide-span');
  displayFunction.classList.contains('hide-me') ? showHideSpan.textContent = 'Display' : showHideSpan.textContent = 'Hide';
});

