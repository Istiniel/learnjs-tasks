function alert(...args) {
  console.log(...args);
}

// Отсортировать пользователей по возрасту

let vasya3 = { name: 'Вася', age: 25 };
let petya3 = { name: 'Петя', age: 30 };
let masha3 = { name: 'Маша', age: 28 };

let arr4 = [vasya3, petya3, masha3];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr4);
