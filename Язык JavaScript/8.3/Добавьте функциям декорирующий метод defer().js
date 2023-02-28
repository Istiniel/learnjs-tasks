let alert = (...args) => console.log(...args);

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

Function.prototype.defer = function (ms) {
  let thisArg = this;
  return function (...args) {
    setTimeout(() => {
      res = thisArg.apply(thisArg, args);
    }, ms);
  };
};

function f(a, b) {
  alert(a + b);
}

// f.defer(1000); // выведет 3 через 1 секунду.
f.defer(1000)(1, 2);
