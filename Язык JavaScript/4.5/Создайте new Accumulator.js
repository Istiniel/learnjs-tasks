function alert(...args) {
  console.log(...args);
}

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
