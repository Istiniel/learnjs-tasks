let alert = (...args) => console.log(...args);

// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit('Rabbit');

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit - this = rabbit
Rabbit.prototype.sayHi(); // undefined - this = Rabbit.prototype, где нет поля name
Object.getPrototypeOf(rabbit).sayHi(); // undefined - this = Rabbit.prototype, где нет поля name
rabbit.__proto__.sayHi(); // undefined - this = Rabbit.prototype, где нет поля name
