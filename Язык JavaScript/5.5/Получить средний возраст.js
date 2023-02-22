function alert(...args) {
  console.log(...args);
}

// Получить средний возраст

let vasya6 = { name: 'Вася', age: 25 };
let petya6 = { name: 'Петя', age: 30 };
let masha6 = { name: 'Маша', age: 29 };

let arr6 = [vasya6, petya6, masha6];

function getAverageAge(arr6) {
  return arr6.reduce((acc, el) => el.age + acc, 0) / arr6.length;
}

alert(getAverageAge(arr6)); // (25 + 30 + 29) / 3 = 28
