function alert(...args) {
  console.log(...args);
}

// Случайное число от min до max
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}
