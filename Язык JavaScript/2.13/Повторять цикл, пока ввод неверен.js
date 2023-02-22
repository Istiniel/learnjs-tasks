function alert(...args) {
  console.log(...args);
}

// Повторять цикл, пока ввод неверен

let number = +prompt('Введите число', '');

while (number <= 100) {
  number = +prompt('Введите число', '');
}
