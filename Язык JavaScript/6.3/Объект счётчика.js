function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1

// В данном случае замыкание для функции-конструктора будет работать аналогично обычной функции, поэтому данный код будет работать
