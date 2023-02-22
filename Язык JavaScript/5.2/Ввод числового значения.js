function alert(...args) {
  console.log(...args);
}

// Ввод числового значения

let number = prompt('Enter number', '0');

function isNumber(number) {
  if (number === null || number === '') return null;
  if (typeof number !== 'number') isNumber(prompt('Enter number', '0'));
}

alert(isNumber(number));
