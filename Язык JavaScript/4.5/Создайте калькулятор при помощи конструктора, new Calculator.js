function alert(...args) {
  console.log(...args);
}

// Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.numbers = [];
  this.read = function (...args) {
    this.numbers = args;
  };

  this.sum = function () {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  };

  this.mul = function () {
    return this.numbers.reduce((acc, num) => acc * num, 1);
  };
}

let calculator = new Calculator();
calculator.read(2, 5, 3);
alert(calculator.sum());
alert(calculator.mul());

// Создайте new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = (newNum) => {
    this.value += newNum;
  };
}

let accumulator = new Accumulator(10);
accumulator.read(7);
console.log(accumulator.value);
