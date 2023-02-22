function alert(...args) {
  console.log(...args);
}

// Трансформировать в массив имён

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((e) => e.name);

alert(names); // Вася, Петя, Маша
