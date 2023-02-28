let alert = (...args) => console.log(...args);

// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // свойство получит rabbit, т.к. this при вызове eat равен rabbit
console.log(rabbit.full); // true
