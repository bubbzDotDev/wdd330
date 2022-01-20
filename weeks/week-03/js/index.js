// Solution accepted on JS Hero site:
// const mean = (numArray) => {
//   const length = numArray.length;
//   let sum = 0;
//   numArray.forEach(num => {
//     sum += num;
//   });
//   return sum / length;
// }

// Solution altered to work with an input in the browswer to accept a string of numbers.
const mean = (inputString) => {
  const numArray = inputString.trim().split(' '); 
  const length = numArray.length;
  let sum = 0;
  let resultString = '('; // Added resultString for fun

  // Go to work
  for (let i = 0; i < length; i++) { // Changed to 'for loop' instead of the 'forEach' used to solve it for more robust string result in the browser.
    sum += +numArray[i]; // Converts numArray[i] from a string to a number before adding it to sum.
    if (numArray[i].trim() === '') {
      return 'not able to be calculated because there are extra spaces';
    } else if (!Number.isInteger(+numArray[i])) {
      return 'not able to be calculated because something other than a number was entered';
    } else if (i === length - 1) {
      resultString += `${numArray[i]}`; // Last number so no plus sign added.
    } else {
      resultString += `${numArray[i]} + `;
    }
  }
  const result = (sum / length).toFixed(1);
  resultString += `) / ${length} = ${result}`;
  return resultString;
}

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

