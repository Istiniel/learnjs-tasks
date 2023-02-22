function alert(...args) {
  console.log(...args);
}

// Перебираемые ключи

let map = new Map();

map.set('name', 'John');

// let keys = map.keys(); // ошибка

let keys = [...map.keys()];

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');

// map.keys() - специальный итерируемый объект, а не массив. чтобы применять методы массива, можно использовать оператор spread или метод Array.from(obj)
