function alert(...args) {
  console.log(...args);
}

// Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  let result = false;
  str = str.toLowerCase();
  str.includes('viagra') && (result = true);
  str.includes('xxx') && (result = true);
  return result;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
