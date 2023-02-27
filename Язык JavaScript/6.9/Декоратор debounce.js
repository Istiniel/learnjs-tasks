let alert = (...args) => console.log(...args);

// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(func, ms) {
  let flag = false;

  function debounced(...args) {
    if (!flag) {
      flag = true;

      setTimeout(() => {
        flag = false;
      }, ms);

      return func.apply(this, args);
    }
  }

  return debounced;
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 2050); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout(() => f(6), 2150); // выполняется
setTimeout(() => f(7), 3200); // выполняется
