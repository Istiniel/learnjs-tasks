let alert = (...args) => console.log(...args);

// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

function throttle(func, ms) {
  let flag = false;

  let lastFuncsArg;

  function throttled(...args) {
    if (!flag) {
      flag = true;

      setTimeout(() => {
        flag = false;

        if (lastFuncsArg) {
          throttled.apply(this, lastFuncsArg);
          lastFuncsArg = null;
        }
      }, ms);

      return func.apply(this, args);
    } else {
      lastFuncsArg = args;
    }
  }

  return throttled;
}

let f = throttle(alert, 3000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 250); // выполняется
setTimeout(() => f(5), 550); // выполняется в самом конце, т.к. сохранился последним в контексте функции throttle
setTimeout(() => f(6), 3100);
