// import functions and grab DOM elements
import { add, subtract, multiply, divide, convert } from './math-utils.js'; 

// addition section 
const addNum1 = document.getElementById('add-num-1');
const addNum2 = document.getElementById('add-num-2');
const addButton = document.getElementById('add-button');
const sumTotal = document.getElementById('sum');

// set event listeners 
addButton.addEventListener('click', () => {
  
  // get user input
    const x = +addNum1.value;
    const y = +addNum2.value;

  // use user input to update state 

    const sum = add(x, y);
  // update DOM to reflect the new state

    sumTotal.textContent = sum;
});

// subtraction section 

const subNum1 = document.getElementById('sub-num-1');
const subNum2 = document.getElementById('sub-num-2');
const subtractButton = document.getElementById('subtract-button');
const subOutcome = document.getElementById('difference');

subtractButton.addEventListener('click', () => {

    const x = +subNum1.value;
    const y = +subNum2.value;
    const difference = subtract(x, y);

    subOutcome.textContent = difference;
});

// multiplication section 

const multNum1 = document.getElementById('multiply-num-1');
const multNum2 = document.getElementById('multiply-num-2');
const multButton = document.getElementById('multiply-button');
const multOutcome = document.getElementById('product');

multButton.addEventListener('click', () => {

    const x = +multNum1.value;
    const y = +multNum2.value;

    const product = multiply(x, y);

    multOutcome.textContent = product;
});

// division section 

const divNum1 = document.getElementById('divide-num-1');
const divNum2 = document.getElementById('divide-num-2');
const divButton = document.getElementById('divide-button');
const divOutcome = document.getElementById('divisor');

divButton.addEventListener('click', () => {

    const x = +divNum1.value;
    const y = +divNum2.value;

    const divisor = divide(x, y);

    divOutcome.textContent = divisor;
});

// celsius to fahrenheit section 

const celNum = document.getElementById('celsius');
const celButton = document.getElementById('convert-button');
const celOutcome = document.getElementById('fahrenheit');

celButton.addEventListener('click', () => {
    const x = celNum.value;
    const fahrenheit = convert(x);

    celOutcome.textContent = fahrenheit;
});