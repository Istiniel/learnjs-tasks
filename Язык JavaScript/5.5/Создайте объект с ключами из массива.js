function alert(...args) {
  console.log(...args);
}

// Создайте объект с ключами из массива
let users2 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(users) {
  return users.reduce((acc, el) => ({ ...acc, [el.id]: el }), {});
}

let usersById = groupById(users2);

console.log(usersById);
console.log(usersById['john']);
