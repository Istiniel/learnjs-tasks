function alert(...args) {
  console.log(...args);
}

// Создайте калькулятор

let calculator = {
  numbers: [],
  read: function (...args) {
    this.numbers = args;
  },
  sum: function () {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  },

  mul: function () {
    return this.numbers.reduce((acc, num) => acc * num, 1);
  },
};

calculator.read(2, 5, 3);
alert(calculator.sum());
alert(calculator.mul());
