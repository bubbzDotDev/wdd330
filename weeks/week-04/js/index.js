const add = (strToAdd) => {
  const arrFromStr = strToAdd.split('+');
  let result = 0;
  arrFromStr.forEach(num => {
    result += +num;
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
    const result = add(numberInput);
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

