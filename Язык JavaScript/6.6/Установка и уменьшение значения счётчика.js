let alert = (...args) => console.log(...args);
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  counter.set = (value) => (counter.count = value);
  counter.decrease = () => counter.count--;

  return counter;
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10

counter.decrease();

alert(counter()); // 10
