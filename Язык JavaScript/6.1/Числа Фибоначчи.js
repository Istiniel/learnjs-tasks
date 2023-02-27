function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return memFib(n - 1) + memFib(n - 2);
  }
}

// запоминаем значения вызова предыдущих функци в cash через замыкание
let mem = function (func) {
  let cash = {};
  return function (n) {
    return cash[n] ? cash[n] : (cash[n] = func(n));
  };
};

let memFib = mem(fib);

console.log(memFib(3)); // 2
console.log(memFib(7)); // 13
console.log(memFib(77)); // 5527939700884757
