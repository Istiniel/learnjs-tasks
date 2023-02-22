function alert(...args) {
  console.log(...args);
}

// Сделать первый символ заглавным

function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(ucFirst('вася'));
