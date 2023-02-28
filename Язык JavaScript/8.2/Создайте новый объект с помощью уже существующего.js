let alert = (...args) => console.log(...args);

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// Сработает

function Object() {
  this.attr = true;
}

let obj = new Object();

let obj2 = new obj.constructor();
console.log(obj2.attr);

// не сработает

Object.prototype = {};
let obj3 = new Object();
let obj4 = new obj3.constructor();
console.log(obj4.attr);
