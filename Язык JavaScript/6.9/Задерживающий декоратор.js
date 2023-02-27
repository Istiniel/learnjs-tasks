let alert = (...args) => console.log(...args);
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

function delay(func, ms) {
  return function (...args) {
    return setTimeout(func.bind(null, ...args), ms);
  };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test1'); // показывает "test" после 1000 мс
f1500('test2'); // показывает "test" после 1500 мс
