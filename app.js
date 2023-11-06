function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = '';
let operator = '';
let secondNumber = '';

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      if (secondNumber != 0) {
        return divide(firstNumber, secondNumber);
      } else {
        return 'Error';
      }
    default:
      return 'Invalid Operator';
  }
}

const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      display.value = '';
      firstNumber = '';
      operator = '';
      secondNumber = '';
    } else if (button.id === 'equals') {
      if (firstNumber && operator && secondNumber) {
        const result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        display.value = result;
        firstNumber = result; // Allow chaining calculations
        operator = '';
        secondNumber = '';
      }
    } else {
      display.value += button.textContent;
      if ('+-*/'.includes(button.textContent)) {
        operator = button.textContent;
      } else {
        if (!operator) {
          firstNumber += button.textContent;
        } else {
          secondNumber += button.textContent;
        }
      }
    }
  });
});
