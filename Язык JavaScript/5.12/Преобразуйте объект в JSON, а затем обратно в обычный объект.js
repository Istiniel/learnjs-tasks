function alert(...args) {
  console.log(...args);
}

// Преобразуйте объект в JSON, а затем обратно в обычный объект:

let user = {
  name: 'Василий Иванович',
  age: 35,
};

let jsonUser = JSON.stringify(user);
let anotherUser = JSON.parse(jsonUser);

console.log(anotherUser);
