function alert(...args) {
  console.log(...args);
}

// Создать расширяемый калькулятор

function Calculator() {
  this.calculate = (str) => {
    str = str.split(' ');
    let firstOperand = +str[0];
    let operator = str[1];
    let secondOperand = +str[2];

    return this.methods[operator](firstOperand, secondOperand);
  };

  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.addMethod = (operand, func) => {
    this.methods[operand] = func;
  };
}
let calc = new Calculator();

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);

alert(calc.calculate('3 ** 5'));
