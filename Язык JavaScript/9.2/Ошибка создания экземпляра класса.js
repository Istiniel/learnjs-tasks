let alert = (...args) => console.log(...args);

// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    // this.name = name; // инициализируется через super
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('Белый кролик');
alert(rabbit.name);
