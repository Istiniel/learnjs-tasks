function alert(...args) {
  console.log(...args);
}

// Вывести простые числа
let n = 100;
let arr = [];

isPrimary: for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) continue isPrimary;
  }
  arr.push(i);
}
console.log(arr);
