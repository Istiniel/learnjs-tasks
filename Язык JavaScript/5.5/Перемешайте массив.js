function alert(...args) {
  console.log(...args);
}

// Перемешайте массив

let arr5 = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.99 / 2);
}

console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));

// Получить средний возраст

let vasya6 = { name: 'Вася', age: 25 };
let petya6 = { name: 'Петя', age: 30 };
let masha6 = { name: 'Маша', age: 29 };

let arr6 = [vasya6, petya6, masha6];

function getAverageAge(arr6) {
  return arr6.reduce((acc, el) => el.age + acc, 0) / arr6.length;
}

alert(getAverageAge(arr6)); // (25 + 30 + 29) / 3 = 28
