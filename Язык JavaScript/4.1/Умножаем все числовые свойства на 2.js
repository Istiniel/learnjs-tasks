function alert(...args) {
  console.log(...args);
}

// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(menu) {
  for (const num in menu) {
    typeof menu[num] === 'number' && (menu[num] *= 2);
  }
  return menu;
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

console.log(JSON.stringify(menu));
