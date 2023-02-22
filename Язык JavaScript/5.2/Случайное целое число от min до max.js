function alert(...args) {
  console.log(...args);
}

// Случайное целое число от min до max

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomInteger(12, 29));
