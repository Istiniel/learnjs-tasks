let alert = (...args) => console.log(...args);
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

function spy(func) {
  function spyFunc(...args) {
    spyFunc.calls.push(args);
    let result = func.apply(this, args);
    return result;
  }
  spyFunc.calls = [];

  return spyFunc;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}
