function alert(...args) {
  console.log(...args);
}

// Выделить число

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));
